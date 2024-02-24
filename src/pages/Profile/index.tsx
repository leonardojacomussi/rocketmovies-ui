import { FC, HTMLAttributes, FormEvent, useState, ChangeEvent } from "react";
import { FaUser } from "react-icons/fa";
import ButtonText from "../../components/ButtonText";
import useAuth from "../../hooks/useAuth";
import { api } from "../../services/api";
import { UpdateUser } from "../../contexts/AuthContext";
import { Container, Form, Avatar } from "./styles";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Profile: FC<HTMLAttributes<HTMLDivElement>> = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : null;
  const [avatar, setAvatar] = useState<string | null>(avatarUrl);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdateUser = async (e: FormEvent) => {
    e.preventDefault();

    const updated: UpdateUser = {
      name,
      email,
      oldPassword,
      password: newPassword,
    };

    const updatedUser = Object.assign(user, updated);

    await updateUser({ user: updatedUser, avatarFile: avatarFile ?? undefined});
  };

  const handleChangeAvatar = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
      setAvatarFile(file);
    };
  }

  return (
    <Container>
      <header>
        <ButtonText onClick={handleBack}>
          <FiArrowLeft />
        </ButtonText>
      </header>

      <Form onSubmit={handleUpdateUser}>
        <Avatar>
          {
            !avatar
              ? <FaUser style={{ fill: "#FFFFFF" }} />
              : <img
              src={avatar}
              alt={user.name}
            />
          }
          <label htmlFor="avatar">
            <FiCamera />
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Senha atual"
          icon={FiLock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          name="newPassword"
          placeholder="Nova senha"
          icon={FiLock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button type="submit">
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;