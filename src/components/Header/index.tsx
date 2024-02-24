import { FC, InputHTMLAttributes } from "react";
import Input from "../Input";
import { api } from "../../services/api";
import { FaUser } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { FiSearch } from "react-icons/fi";
import { Container, Logo, Search, Profile } from "./styles";
import { useNavigate, NavigateFunction } from "react-router-dom";

const Header: FC<InputHTMLAttributes<HTMLInputElement>> = (props): JSX.Element => {
  const { user, signOut } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: null;
  const navigate: NavigateFunction = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <Container>
      <Logo>RocketMovies</Logo>
      <Search>
        <Input icon={FiSearch} type="text" placeholder="Pesquisar pelo título" {...props}/>
      </Search>
      <Profile>
        <div className="details">
          <span>{user.name}</span>
          <button
            aria-label="Fazer logout"
            title="Fazer logout"
            onClick={handleSignOut}
          >
            Sair
          </button>
        </div>
        <button
          className="avatar"
          aria-label="Acessar perfil"
          title="Acessar perfil"
          onClick={() => navigate("/perfil")}
        >
          {
            !avatarUrl
              ? <FaUser style={{ fill: "#FFFFFF" }} />
              : <img
                src={avatarUrl}
                alt={user.name}
              />
          }
        </button>
      </Profile>
    </Container>
  );
};

export default Header;