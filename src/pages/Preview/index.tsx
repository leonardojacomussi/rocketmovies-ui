import { FC, HTMLAttributes, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Tag from "../../components/Tag";
import { FaUser } from "react-icons/fa";
import { api } from "../../services/api";
import Stars from "../../components/Stars";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Container, Content, Top, Tags } from "./styles";
import { useNavigate, useParams, NavigateFunction } from "react-router-dom";

type MovieProps = {
  id: number,
  title: string,
  description: string,
  rating: number,
  user_id: number,
  created_at: string,
  updated_at: string,
  tags: {
    id: number,
    name: string,
    movie_id: number,
    user_id: number
  }[]
};

const Preview: FC<HTMLAttributes<HTMLElement>> = () => {
  const navigate: NavigateFunction = useNavigate();

  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: null;

  const { id } = useParams();

  const [movie, setMovie] = useState<MovieProps>({} as MovieProps);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = async () => {
    try {
      const confirm = window.confirm("Deseja realmente excluir este filme?");
      if (!confirm) return;
      await api.delete(`/movies/${id}`);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!id) return;
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <Container>
      <Header />
      {
        movie &&
          <Content>
            <Top>
              <div className="btns">
                <ButtonText
                  $isActive
                  className="back"
                  onClick={handleBack}
                >
                  <FiArrowLeft />
                  Voltar
                </ButtonText>

                <Button
                  type="button"
                  className="delete"
                  onClick={handleDelete}
                >
                  Excluir filme
                </Button>
              </div>

              <div className="title-rating">
                <h1 className="title">{movie.title}</h1>
                <Stars rate={movie.rating} />
              </div>
              <div className="infos">
                <div className="avatar">
                  {
                    !avatarUrl
                      ? <FaUser style={{ fill: "#FFFFFF" }} />
                      : <img src={avatarUrl} alt={user.name} />
                  }
                </div>
                <span>{user.name}</span>
                <FiClock />
                {new Date(movie.updated_at).toLocaleDateString("pt-BR")}{' '}{new Date(movie.updated_at).toLocaleTimeString("pt-BR")}
              </div>
            </Top>
            {
              movie.tags && movie.tags.length > 0 &&
                <Tags>
                  {
                    movie.tags.map(tag => (
                      <Tag key={tag.id+tag.name}>{tag.name}</Tag>
                    ))
                  }
                </Tags>
            }
            {
              movie.description && <p>{movie.description}</p>
            }
          </Content>
      }
    </Container>
  );
};

export default Preview;