import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 3.2rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_900};
`;

export const Header = styled.header<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: auto;

  > span {
    margin-top: 8px;
    color: ${({ theme }) => theme.COLORS.PINK_800};

    > svg {
      margin-right: .6rem;
    };
  };
`;

export const Body = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  margin: 1.5rem 0;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Footer = styled.footer<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;