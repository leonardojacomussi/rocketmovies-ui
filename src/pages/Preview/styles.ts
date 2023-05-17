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
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  gap: 4rem;
  overflow-y: auto;
  padding: 0 12.3rem;

  @media (max-width: 768px) {
    padding: 0 2.4rem;
  };

  @media (max-width: 768px) {
    gap: 2.5rem;
  };

`;

export const Top = styled.div<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > .title-rating {
    display: flex;
    align-items: center;
    gap: 1.9rem;
  };

  > .infos {
    display: flex;
    align-items: center;
    gap: .8rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_800};
    }

    > .avatar {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_900};

      > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_900};
      };
    };
  };
`;

export const Tags = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;

  > span {
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
  };
`;
