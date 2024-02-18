import { FC, HTMLAttributes } from "react";
import { Container, Content, Form } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ButtonText from "../../components/ButtonText";
import TextArea from "../../components/TextArea";
import { FiArrowLeft } from "react-icons/fi";
import NewTag from "../../components/NewTag";
import { useNavigate, NavigateFunction } from "react-router-dom";

const New: FC<HTMLAttributes<HTMLElement>> = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Container>
      <Header />
      <Content>
        <Form onSubmit={(event) => event.preventDefault()}>
          <ButtonText
            $isActive
            className="back"
            onClick={() => navigate("/")}
          >
            <FiArrowLeft />
            Voltar
          </ButtonText>
          <h1 className="title">Novo filme</h1>
          <Input
            type="text"
            name="title"
            aria-label="Título"
            placeholder="Título"
            className="movie-title"
          />
          <Input
            type="number"
            name="rating"
            min={1}
            max={5}
            aria-label="Nota do filme"
            placeholder="Sua nota (de 0 a 5)"
            className="movie-rating"
          />
          <TextArea
            aria-label="Observações sobre o filme"
            placeholder="Observações"
            className="movie-description"
          />
          <h2 className="tag-title">Marcadores</h2>
          <div className="tags-container">
            <NewTag value={"React.js"} isNew={false}/>
            <NewTag value={"Node.js"} isNew={false}/>
            <NewTag isNew placeholder="Novo marcador"/>
          </div>
          <Button
            type="button"
            className="delete"
          >
            Excluir filme
          </Button>
          <Button
            type="submit"
            className="submit"
          >
            Salvar alterações
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default New;