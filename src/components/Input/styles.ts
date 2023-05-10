import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BLACK_700};
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  margin-bottom: .8rem;
  border-radius: ${({ theme }) => theme.BORDERS.RADIUS};

  > input {
    height: 5.6rem;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_800};

    padding: 1.2rem;
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    };
  };

  > svg {
    margin-left: 1.6rem;
  };
`;