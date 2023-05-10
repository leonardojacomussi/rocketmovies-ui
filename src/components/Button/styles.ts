import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

export const Container = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_800};
  color: ${({ theme }) => theme.COLORS.BLACK_600};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: ${({ theme }) => theme.BORDERS.RADIUS};
  font-weight: 500;

  &:disabled {
    opacity: .5;
    cursor: default;
  };

  &:disabled:hover {
    filter: none;
  };
`;