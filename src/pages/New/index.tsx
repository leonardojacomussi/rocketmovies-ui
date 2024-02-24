import { FC, HTMLAttributes, useState, FormEvent } from "react";
import { Container, Content, Form } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ButtonText from "../../components/ButtonText";
import TextArea from "../../components/TextArea";
import { FiArrowLeft } from "react-icons/fi";
import NewTag from "../../components/NewTag";
import { api } from "../../services/api";
import { useNavigate, NavigateFunction } from "react-router-dom";

const New: FC<HTMLAttributes<HTMLElement>> = () => {
  const navigate: NavigateFunction = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>("");

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddTag = () => {
    setTags((oldTags) => [...oldTags, newTag]);
    setNewTag("");
  };

  const handleRemoveTag = (tag: string) => {
    setTags((oldTags) => oldTags.filter((oldTag) => oldTag !== tag));
  };

  const handleRating = (event: FormEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    if (value < 0) {
      setRating(0);
    } else if (value > 5) {
      setRating(5);
    } else {
      setRating(value);
    };
  }

  const handleSubmitNewMovie = async (e: FormEvent) => {
    e.preventDefault();

    if (!title) {
      return alert("Título é obrigatório");
    };

    if (!rating) {
      return alert("Nota é obrigatória");
    };

    if (!description) {
      return alert("Descrição é obrigatória");
    };

    if (!tags.length) {
      return alert("Pelo menos um marcador é obrigatório");
    };

    const data = {
      title,
      rating,
      description,
      tags,
    };

    try {
      await api.post("/movies", data);
      setTitle("");
      setRating(0);
      setDescription("");
      setTags([]);
      setNewTag("");
      alert("Filme cadastrado com sucesso!");
      return navigate(-1);
    } catch (error: any) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Ops! Aconteceu um erro, tente novamente mais tarde.");
      };
    };
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form onSubmit={handleSubmitNewMovie}>
          <ButtonText
            $isActive
            className="back"
            onClick={handleBack}
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
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            type="number"
            name="rating"
            min={1}
            max={5}
            aria-label="Nota do filme"
            placeholder="Sua nota (de 0 a 5)"
            className="movie-rating"
            value={rating}
            onChange={handleRating}
          />
          <TextArea
            aria-label="Observações sobre o filme"
            placeholder="Observações"
            className="movie-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <h2 className="tag-title">Marcadores</h2>
          <div className="tags-container">
            {
              tags.map((tag, index) => (
                <NewTag
                  $isNew={false}
                  key={index+tag}
                  onClick={() => handleRemoveTag(tag)}
                  value={tag}
                />
              ))
            }
            <NewTag
              $isNew
              placeholder="Novo marcador"
              onClick={handleAddTag}
              value={newTag}
              onChange={(event) => setNewTag(event.target.value)}
            />
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