import { Container, Header, Body, Footer } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FC, HTMLAttributes } from "react";
import Tag from "../Tag";
import { truncate } from "../../utils/strings";

interface CardMovieProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  rate: 1 | 2 | 3 | 4 | 5;
  tags: Array<string>;
};

const CardMovie: FC<CardMovieProps> = ({title, description, rate, tags, ...props}): JSX.Element => {
  const starts: { [key: number]: JSX.Element } = {
    1: <span><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>,
    2: <span><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>,
    3: <span><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></span>,
    4: <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></span>,
    5: <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>,
  };

  return (
    <Container {...props}>
      <Header>
        <h2>{title}</h2>
        {starts[rate]}
      </Header>
      <Body>
        <p>{truncate(description, 300)}</p>
      </Body>
      <Footer>
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </Footer>
    </Container>
  );
};

export default CardMovie;