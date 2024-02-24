import styled from "styled-components";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 3.2rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_900};

  text-decoration: none;
  color: inherit;
`;

export const Header = styled.header<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: .8rem;
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