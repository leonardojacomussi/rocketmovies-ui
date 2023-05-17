import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Profile: FC<HTMLAttributes<HTMLDivElement>> = (): JSX.Element => {
  return (
    <Container>
      <header>
        <Link to="/"><FiArrowLeft /></Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/leonardojacomussi.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          icon={FiUser}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          icon={FiMail}
        />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Senha atual"
          icon={FiLock}
        />
        <Input
          type="password"
          name="newPassword"
          placeholder="Nova senha"
          icon={FiLock}
        />

        <Button>
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;