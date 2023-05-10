import { FC, ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
};

const Button: FC<ButtonProps> = ({ children, loading, ...props }): JSX.Element => {
  return (
    <Container
      type="button"
      disabled={loading}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </Container>
  );
};

export default Button;