import { Container } from "./styles";
import { FC, TextareaHTMLAttributes } from "react";

const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <Container {...props}/>;
};

export default TextArea;