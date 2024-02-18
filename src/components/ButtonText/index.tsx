import { Container } from "./styles";
import { FC } from "react";
import ButtonTextProps from "./ButtonTextProps";

const ButtonText: FC<ButtonTextProps> = ({ children, isActive, ...props }) => {
  return (
    <Container
      type="button"
      $isActive={isActive}
      {...props}
    >
      {children}
    </Container>
  );
};

export default ButtonText;