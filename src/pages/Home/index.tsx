import { FC, HTMLAttributes, useState, useCallback, useEffect } from "react";
import { Container, Top, Content } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { api } from "../../services/api";
import CardMovie from "../../components/CardMovie";
import { useNavigate, NavigateFunction } from "react-router-dom";

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

const Home: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const navigate: NavigateFunction = useNavigate();

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await api.get("/movies", {
        params: {
          tags: "",
          title: search,
        },
      });
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [search]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <Container {...props}>
      <Header
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Top>
        <h1>Meus filmes</h1>
        <Button className="addFilm" onClick={() => navigate("/new")}>
          <FiPlus />
          Adicionar filme
        </Button>
      </Top>
      <main>
        <Content>
          {
            movies.map((movie) => (
              <CardMovie key={movie.id+movie.title} movie={movie} />
            ))
          }
        </Content>
      </main>
    </Container>
  );
};

export default Home;