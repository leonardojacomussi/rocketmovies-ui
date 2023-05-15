import { FC, InputHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType,
};

const Input: FC<InputProps> = ({ icon: Icon, className, ...props }): JSX.Element => {
  return (
    <Container className={className ? className : ""}>
      {Icon && <Icon />}
      <input {...props} />
    </Container>
  );
};

export default Input;