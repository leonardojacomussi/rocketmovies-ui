import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
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
        <Link to="/">
          <FiArrowLeft />
            Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
};

export default SignUp;