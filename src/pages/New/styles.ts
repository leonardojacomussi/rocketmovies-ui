import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.header<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "main";
`;

export const Content = styled.main<HTMLAttributes<HTMLElement>>`
  grid-area: main;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 12.3rem;

  @media (max-width: 768px) {
    padding: 0 2.4rem;
  };
`;

export const Form = styled.form<HTMLAttributes<HTMLFormElement>>`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(7, auto);
  grid-template-areas:
    "back . "
    "title . "
    "movie-title movie-rating"
    "movie-description movie-description"
    "tag-title ."
    "tags-container ."
    "delete submit";
  margin: 4rem 0;
  gap: 4rem;

  > .back {
    grid-area: back;
  };

  > .title {
    grid-area: title;
  };

  > .movie-title {
    grid-area: movie-title;
  };

  > .movie-rating {
    grid-area: movie-rating;
  };

  > .movie-description {
    grid-area: movie-description;
  };

  > .tag-title {
    grid-area: tag-title;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  };

  > .tags-container {
    grid-area: tags-container;
  };

  > .delete {
    grid-area: delete;
    color: ${({ theme }) => theme.COLORS.PINK_800};
    background-color: ${({ theme }) => theme.COLORS.BLACK_900};
  };

  > .submit {
    grid-area: submit;
  };

  @media (max-width: 768px) {
    gap: 2.5rem;
  };

  @media (max-width: 415px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(9, auto);
    grid-template-areas:
      "back"
      "title"
      "movie-title"
      "movie-rating"
      "movie-description"
      "tag-title"
      "tags-container"
      "delete"
      "submit";

    > .submit {
      margin-top: -1rem;
    };
  };
`;