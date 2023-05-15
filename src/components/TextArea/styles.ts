import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.textarea<HTMLAttributes<HTMLTextAreaElement>>`
  width: 100%;
  height: 15rem;

  background-color: ${({ theme }) => theme.COLORS.BLACK_700};
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  margin-bottom: .8rem;
  border-radius: ${({ theme }) => theme.BORDERS.RADIUS};
  padding: 1.6rem;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  };
`;