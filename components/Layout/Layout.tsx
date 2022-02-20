import { FC } from "react";
import { GlobalStyles } from "../GlobalStyles";
import { LayoutStyled } from "./Layout.styled";
import { Header } from "../Header/Header";

export const Layout: FC = ({ children }) => {
  return (
    <LayoutStyled.Container>
      <GlobalStyles />
      <Header />
      <LayoutStyled.Main>{children}</LayoutStyled.Main>
    </LayoutStyled.Container>
  );
};
