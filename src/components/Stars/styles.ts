import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.span<HTMLAttributes<HTMLSpanElement>>`
  color: ${({ theme }) => theme.COLORS.PINK_800};

  > svg {
    margin-right: .6rem;
  };
`;