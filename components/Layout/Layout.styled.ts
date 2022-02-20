import styled from "styled-components";

const Main = styled.main`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  padding: 0 0.5rem;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;

  @media only screen and (min-width: 1025px) {
    max-width: 1024px;
  }
`;

export const LayoutStyled = {
  Main,
  Container,
};
