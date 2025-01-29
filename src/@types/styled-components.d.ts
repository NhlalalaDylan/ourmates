import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      text: string;
      background: string;
      secondaryBackground: string;
      border: string;
    };
  }
}