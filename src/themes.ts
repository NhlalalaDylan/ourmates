import { DefaultTheme as DefaultThemeProps } from 'styled-components';

export const DarkTheme: DefaultThemeProps = {
    borderRadius: '5px',
    dark: true, 
    colors: {
        primary: '#1E1E1E',
        text: '#FFFFFF',
        background: '#121212',
        secondaryBackground: '#1E1E1E',
        border: '#333333',
    },
};

export const LightTheme: DefaultThemeProps = {
    borderRadius: '5px',
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