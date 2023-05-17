import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FC, HTMLAttributes } from "react";
import { Container } from "./styles";

interface StarsProps extends HTMLAttributes<HTMLDivElement> {
  rate: 1 | 2 | 3 | 4 | 5;
};

const Stars: FC<StarsProps> = ({rate, ...props}): JSX.Element => {
  const starts: { [key: number]: JSX.Element } = {
    1: <><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></>,
    2: <><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></>,
    3: <><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></>,
    4: <><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></>,
    5: <><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></>,
  };

  return (
    <Container {...props}>
      {starts[rate]}
    </Container>
  );
};

export default Stars;