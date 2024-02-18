import styled from "styled-components";
import ButtonTextProps from "./ButtonTextProps";

export const Container = styled.button<ButtonTextProps>`
  width: fit-content;
  height: fit-content;
  background: none;
  color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.PINK_800 : theme.COLORS.GRAY_800};

  border: none;
  font-size: 1.6rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
`;