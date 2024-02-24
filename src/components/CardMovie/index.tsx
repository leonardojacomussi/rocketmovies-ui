import { Container, Header, Body, Footer } from "./styles";
import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import Tag from "../Tag";
import Stars from "../Stars";
import { truncate } from "../../utils/strings";

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

interface CardMovieProps extends HTMLAttributes<HTMLDivElement> {
  movie: MovieProps;
};

const CardMovie: FC<CardMovieProps> = ({ movie, ...props }): JSX.Element => {
  return (
    <Container to={`movie/${movie.id}`}>
      <Header>
        <h2>{movie.title}</h2>
        <Stars rate={movie.rating} />
      </Header>
      <Body>
        <p>{truncate(movie.description, 300)}</p>
      </Body>
      <Footer>
        {movie.tags.map(tag => <Tag key={tag.id+tag.name}>{tag.name}</Tag>)}
      </Footer>
    </Container>
  );
};

export default CardMovie;