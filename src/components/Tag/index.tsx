import { Container } from "./styles";
import { FC, HTMLAttributes } from "react";

const Tag: FC<HTMLAttributes<HTMLSpanElement>> = ({children, ...props}): JSX.Element => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default Tag;