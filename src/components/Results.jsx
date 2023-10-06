import { Card, Typography } from "antd";

function Results({ quiz, selectedAnswers }) {
  const { Title, Paragraph } = Typography;
  const correctAnswersCount = quiz.filter((quizItem) =>
    selectedAnswers.some(
      (selectedItem) => selectedItem.answer === quizItem.correct
    )
  ).length;
  return (
    <Card style={{ width: "400px", backgroundColor: "#4096FF" }}>
      <Title style={{ color: "#fff" }} level={2}>
        {!correctAnswersCount
          ? `Loser`
          : correctAnswersCount <= 3
          ? `Not Bad`
          : correctAnswersCount === 4
          ? `Congratulations! You did well!`
          : "You are genius"}
      </Title>
      <Paragraph
        style={{ color: "#fff" }}
      >{`Your score: ${correctAnswersCount} / ${quiz.length}`}</Paragraph>
    </Card>
  );
}

export default Results;
