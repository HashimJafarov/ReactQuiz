import React, { useState, useEffect } from "react";
import { Button, Card, Progress, Space, Typography } from "antd";
import Answer from "./components/Answer";
import Question from "./components/Question";
import "./App.css";
import ShowResults from "./components/ShowResults";
import Timer from "./components/Timer";
import { quiz } from "./Helpers/quiz";
function App() {
  const { Paragraph } = Typography;

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [results, setResults] = useState(false);
  const [seconds, setSeconds] = useState(90);

  const previousQuestion = () => {
    setActiveQuestion(activeQuestion - 1);
  };
  const nextQuestion = () => {
    setActiveQuestion(activeQuestion + 1);
  };

  const handleAnswer = (e) => {
    const findAnswer = selectedAnswers.find(
      (correct) => correct.id === activeQuestion + 1
    );
    if (findAnswer) {
      findAnswer.answer = e.target.textContent;

      setSelectedAnswers([
        ...selectedAnswers.filter((select) => select.id !== findAnswer.id),
        { id: activeQuestion + 1, answer: e.target.textContent },
      ]);
      return;
    }
    setSelectedAnswers([
      ...selectedAnswers,
      { id: activeQuestion + 1, answer: e.target.textContent },
    ]);
  };
  const restartGame = () => {
    setResults(false);
    setActiveQuestion(0);
    setSeconds(90);
    setSelectedAnswers([]);
  };
  return (
    <>
      {!results && (
        <Space
          direction="vertical"
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            <Timer
              setResults={setResults}
              seconds={seconds}
              setSeconds={setSeconds}
            />
            <Question quiz={quiz.length && quiz[activeQuestion].question} />

            <Card style={{ width: "500px" }}>
              {quiz.length &&
                quiz[activeQuestion].answers.map((answer, index) => (
                  <Answer
                    key={index}
                    handleAnswer={handleAnswer}
                    answer={answer}
                    selectedAnswers={selectedAnswers}
                  />
                ))}
            </Card>
            <div className="footer">
              <div className="footer_question">
                <Paragraph>
                  {`${activeQuestion + 1}/${quiz.length} Questions`}
                </Paragraph>
              </div>
              <div className="footer_btns">
                {activeQuestion ? (
                  <Button type="default" onClick={previousQuestion}>
                    Previous Question
                  </Button>
                ) : null}
                {activeQuestion === quiz.length - 1 ? (
                  <Button type="primary" onClick={() => setResults(true)}>
                    Get Results
                  </Button>
                ) : (
                  <Button type="primary" onClick={nextQuestion}>
                    Next Question
                  </Button>
                )}
              </div>
            </div>
          </>
        </Space>
      )}
      {results && (
        <ShowResults
          quiz={quiz}
          selectedAnswers={selectedAnswers}
          restartGame={restartGame}
        />
      )}
    </>
  );
}

export default App;
