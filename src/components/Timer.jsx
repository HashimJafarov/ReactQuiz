import { useEffect, useState } from "react";
import { Typography, Progress } from "antd";

function Timer({ setResults, seconds, setSeconds }) {
  const { Paragraph } = Typography;
  const findPercentage = Math.floor((seconds / 90) * 100);
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [seconds]);
  useEffect(() => {
    if (seconds === 0) {
      setTimeout(() => {
        setResults(true);
      }, 500);
    }
  }, [!seconds]);
  const remainingMinutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <div className="timer">
      <Progress
        type="circle"
        percent={findPercentage}
        format={(findPercentage) => `${findPercentage}%`}
      />
      <Paragraph
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "50px",
          backgroundColor: "#4096FF",
          borderRadius: "7px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {remainingMinutes >= 10 ? remainingMinutes : "0" + remainingMinutes} :
        {remainingSeconds >= 10 ? remainingSeconds : "0" + remainingSeconds}
      </Paragraph>
    </div>
  );
}

export default Timer;
