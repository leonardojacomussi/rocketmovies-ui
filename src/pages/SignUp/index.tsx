import { FormEvent, useState } from "react";
import { Container, Form, Background } from "./styles";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    };

    try {
      const response = await api.post("/users", { name, email, password });
      if (response.status === 201) {
        alert("Usuário criado com sucesso!");
        navigate("/");
      };
    } catch (error: any) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Erro ao criar usuário, tente novamente mais tarde.");
      };
    };
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Registrar
        </Button>
        <ButtonText className="back" onClick={handleBack}>
          <FiArrowLeft />
            Voltar para o login
        </ButtonText>
      </Form>
      <Background />
    </Container>
  );
};

export default SignUp;