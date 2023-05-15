import { Container } from "./styles";
import { FC, HTMLAttributes } from "react";

const TextArea: FC<HTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <Container {...props}/>;
};

export default TextArea;