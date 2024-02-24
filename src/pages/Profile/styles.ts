import styled from "styled-components";
import { HTMLAttributes, FormHTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.PINK_900};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.PINK_800};
    };

    @media(max-width: 768px) {
      padding: 0 2.4rem;
    };
  };
`;

export const Form = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  max-width: 34rem;
  margin: -8.4rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  };
`;

export const Avatar = styled.div<HTMLAttributes<HTMLDivElement>>`
  position: relative;
  margin: 0 auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img, svg {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    object-fit: cover;
  };

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK_800};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;
    cursor: pointer;

    input {
      display: none;
    };

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BLACK_900};
    };
  };
`;
