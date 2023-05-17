import { Container, Header, Body, Footer } from "./styles";
import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import Tag from "../Tag";
import Stars from "../Stars";
import { truncate } from "../../utils/strings";

interface CardMovieProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  rate: 1 | 2 | 3 | 4 | 5;
  tags: Array<string>;
};

const CardMovie: FC<CardMovieProps> = ({ title, description, rate, tags, ...props }): JSX.Element => {
  return (
    <Container {...props}>
      <Link to={`movie/${title}`}>
        <Header>
          <h2>{title}</h2>
          <Stars rate={rate} />
        </Header>
        <Body>
          <p>{truncate(description, 300)}</p>
        </Body>
        <Footer>
          {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </Footer>
      </Link>
    </Container>
  );
};

export default CardMovie;