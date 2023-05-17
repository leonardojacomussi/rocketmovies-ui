import { HTMLAttributes, InputHTMLAttributes, MouseEventHandler } from "react";

export default interface NewTagProps extends InputHTMLAttributes<HTMLInputElement> {
  isNew: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  isNew: boolean;
}