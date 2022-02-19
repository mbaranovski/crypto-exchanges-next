import { FC } from "react";
import Image from "next/image";
import { GlobalStyles } from "../GlobalStyles";
import { LayoutStyled } from "./Layout.styled";
import { Header } from "../Header/Header";
import Head from "next/head";

export const Layout: FC = ({ children }) => {
  return (
    <LayoutStyled.Container>
      <GlobalStyles />
      <LayoutStyled.Header>
        <Header />
      </LayoutStyled.Header>
      <LayoutStyled.Main>{children}</LayoutStyled.Main>
    </LayoutStyled.Container>
  );
};
