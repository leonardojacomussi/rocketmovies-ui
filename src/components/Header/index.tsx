import { FC, HTMLAttributes } from "react";
import { Container, Logo, Search, Profile } from "./styles";
import { FiSearch } from "react-icons/fi";
import Input from "../Input";

const Header: FC<HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <Container {...props}>
      <Logo>RocketMovies</Logo>
      <Search>
        <Input icon={FiSearch} type="text" placeholder="Pesquisar pelo título" />
      </Search>
      <Profile>
        <div className="details">
          <span>Leonardo Jacomussi</span>
          <button
            aria-label="Fazer logout"
            title="Fazer logout"
          >
            Sair
          </button>
        </div>
        <button
          className="avatar"
          aria-label="Acessar perfil"
          title="Acessar perfil"
        >
          <img
            src="https://github.com/leonardojacomussi.png"
            alt="Foto do usuário"
          />
        </button>
      </Profile>
    </Container>
  );
};

export default Header;