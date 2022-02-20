import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyles";
import { LayoutStyled } from "./Layout.styled";
import { Header } from "../Header/Header";
import { layoutTheme } from "../../theme";

export const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={layoutTheme}>
      <LayoutStyled.Container>
        <GlobalStyles />
        <Header />
        <LayoutStyled.Main>{children}</LayoutStyled.Main>
      </LayoutStyled.Container>
    </ThemeProvider>
  );
};
