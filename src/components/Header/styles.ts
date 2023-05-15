import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.header<HTMLAttributes<HTMLElement>>`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12.3rem;

  @media (max-width: 768px) {
    padding: 0 2.4rem;
  };
`;

export const Logo = styled.h1<HTMLAttributes<HTMLHeadingElement>>`
  color: ${({ theme }) => theme.COLORS.PINK_800};
  user-select: none;
  font-size: 2.4rem;
  line-height: 3.2rem;
`;

export const Search = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 50%;
  padding: 0 2.4rem;
`;

export const Profile = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  gap: .9rem;

  > .details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .4rem;

    > span {
      white-space: nowrap;
      font-size: 1.4rem;
      line-height: 1.8rem;
    };

    > button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    };

    @media (max-width: 768px) {
      display: none;
    };
  };

  > .avatar {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};

    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    };
  };
`;