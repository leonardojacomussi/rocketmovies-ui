import styled from "styled-components";
import { ContainerProps } from "./NewTagProps";

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE_900};

  background-color: ${({ $isNew, theme }) => $isNew ? "transparent" : theme.COLORS.BLACK_700};
  border: ${({ $isNew, theme }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_800}` : "none"};

  > input {
    width: 100%;
    border: none;
    background-color: transparent;
    color: ${({ $isNew, theme }) => $isNew ? theme.COLORS.GRAY_800 : "white"};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    };
  };


  > button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK_800};

    > svg {
      font-size: 2.4rem;
    };
  };
`;