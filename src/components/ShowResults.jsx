import { Space, Card, Typography, Button } from "antd";
import Question from "./Question";
import Results from "./Results";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
function ShowResults({ quiz, selectedAnswers, restartGame }) {
  const { Paragraph } = Typography;
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <Results quiz={quiz} selectedAnswers={selectedAnswers} />
      {quiz.map((quiz) => {
        const findChosenAnswer = selectedAnswers.length
          ? selectedAnswers.find((selected) => selected.id === quiz.id)
          : false;
        const correctAnswer = findChosenAnswer?.answer === quiz.correct;
        return (
          <div key={quiz.id}>
            <Question quiz={quiz.question} />
            <Paragraph
              style={
                correctAnswer
                  ? {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#72c472",
                      width: "400px",
                      padding: "10px",
                      borderRadius: "7px",
                    }
                  : {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#f19090",
                      width: "400px",
                      padding: "10px",
                      borderRadius: "7px",
                    }
              }
              ellipsis={{
                suffix: correctAnswer ? (
                  <CheckCircleOutlined style={{ color: "#fff" }} />
                ) : (
                  <CloseCircleOutlined style={{ color: "#fff" }} />
                ),
              }}
            >
              {findChosenAnswer?.answer
                ? `You have chosen : ${findChosenAnswer.answer}`
                : "You didn't choose"}
            </Paragraph>
            <Paragraph
              style={{
                border: "1px solid #000",
                borderRadius: "7px",
                padding: "10px",
              }}
            >
              Correct Answer : {quiz.correct}
            </Paragraph>
          </div>
        );
      })}
      <Button type="primary" style={{ width: "400px" }} onClick={restartGame}>
        Restart Game
      </Button>
    </Space>
  );
}

export default ShowResults;
