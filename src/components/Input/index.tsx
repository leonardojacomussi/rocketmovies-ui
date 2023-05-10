import { FC, InputHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType,
};

const Input: FC<InputProps> = ({ icon: Icon, ...props }): JSX.Element => {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...props} />
    </Container>
  );
};

export default Input;