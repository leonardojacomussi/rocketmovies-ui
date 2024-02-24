import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "top"
    "main";
  height: 100vh;
  width: 100%;
  justify-content: start;

  > main {
    grid-area: main;
    padding: 0 12.3rem;
    overflow-y: auto;

    @media (max-width: 768px) {
      padding: 0 2.4rem;
    };
  };
`;

export const Top =  styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: top;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 3.7rem;
  padding: 0 12.3rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: normal;
  };

  > button {
    width: fit-content;
  };

  @media (max-width: 768px) {
    padding: 0 2.4rem;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  margin-bottom: 3.7rem;
`;