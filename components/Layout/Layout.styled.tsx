import styled from "styled-components";

const Main = styled.main``;

const Container = styled.div`
  padding: 0 0.5rem;
  margin: 0 auto;
  width: 100%;

  @media only screen and (min-width: 1025px) {
    max-width: 1024px;
  }
`;

const Footer = styled.footer``;

const Header = styled.header``;

export const LayoutStyled = {
  Main,
  Container,
  Footer,
  Header,
};
