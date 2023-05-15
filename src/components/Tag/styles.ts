import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.span<HTMLAttributes<HTMLSpanElement>>`
  width: fit-content;
  height: auto;

  font-size: 1.2rem;

  padding: .5rem 1.6rem;
  border-radius: .8rem;
  margin-right: .8rem;

  color: ${({ theme }) => theme.COLORS.WHITE_800};
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
`;