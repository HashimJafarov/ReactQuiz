import { Typography } from "antd";

function Question({ quiz }) {
  const { Title } = Typography;
  return <Title level={5}>{quiz}</Title>;
}

export default Question;
