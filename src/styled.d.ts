// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      BLACK_900: string,
      BLACK_800: string,
      BLACK_700: string,
      BLACK_600: string,

      GRAY_900: string,
      GRAY_800: string,
      GRAY_700: string,

      WHITE_900: string,
      WHITE_800: string,

      PINK_900: string,
      PINK_800: string,
    },
    BORDERS: {
      RADIUS: string
    },
  };
};