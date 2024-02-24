import { useState, FormEvent } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Preencha todos os campos");
    };

    await signIn({ email, password });
  };

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">
          Entrar
        </Button>
        <Link to="/register">
            Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  );
};

export default SignIn;