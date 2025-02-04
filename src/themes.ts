import { DefaultTheme as DefaultThemeProps } from 'styled-components';

export const DarkTheme: DefaultThemeProps = {
  dark: true,
  colors: {
    primary: "#D45B90",
    text: "#ffffff",
    background: "#07112D",
    secondaryBackground: "#111D40",
    border: "#111D40",
  },
};

export const LightTheme: DefaultThemeProps = {
  dark: false,
  colors: {
    primary: "#EE61A1",
    text: "#070F26",
    background: "#ffffff",
    secondaryBackground: "#F8F8F8",
    border: "#f2f2f2",
  },
  };

export const DefaultTheme = LightTheme;