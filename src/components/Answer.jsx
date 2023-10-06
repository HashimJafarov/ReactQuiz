import { Typography } from "antd";
function Answer({ answer, handleAnswer, selectedAnswers }) {
  const { Paragraph } = Typography;
  const selectedItem = selectedAnswers.find(
    (selected) => selected.answer === answer
  );
  return (
    <Paragraph
      onClick={handleAnswer}
      style={
        selectedItem
          ? {
              border: "none",
              borderRadius: "8px",
              padding: "5px",
              cursor: "pointer",
              backgroundColor: "#4096FF",
              color: "#fff",
            }
          : {
              border: "1px solid #000",
              borderRadius: "8px",
              padding: "5px",
              cursor: "pointer",
            }
      }
    >
      {answer}
    </Paragraph>
  );
}

export default Answer;
