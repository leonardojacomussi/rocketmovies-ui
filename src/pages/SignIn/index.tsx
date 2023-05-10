import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button>Entrar</Button>
        <Link to="/register">
          <FiArrowLeft />
            Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  );
};

export default SignIn;