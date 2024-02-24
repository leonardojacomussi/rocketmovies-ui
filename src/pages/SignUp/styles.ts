import styled from "styled-components";
import { HTMLAttributes } from "react";
import background from "../../assets/background.png";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;

  @media(max-width: 590px) {
    height: auto;
  };
`;

export const Form = styled.form<HTMLAttributes<HTMLFormElement>>`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK_800};
  };

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  };

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_900};
  };

  > button.back {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.PINK_800};
    display: flex;
    align-items: center;

    > svg {
      font-size: 1.6rem;
      margin-right: .8rem;
    };
  };

  @media(max-width: 590px) {
    padding: 5rem;
    width: 100%;
    height: auto;
    margin: 0 auto;

    > h1 {
      font-size: 3.8rem;
    };

    > button.back {
      margin-top: 5.4rem;
    };
  };
`;


export const Background = styled.div<HTMLAttributes<HTMLDivElement>>`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;

  @media(max-width: 590px) {
    display: none;
  };
`;