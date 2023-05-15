import { ButtonHTMLAttributes } from "react";

export default interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
};