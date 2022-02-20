import styled from "styled-components";
import Image from "next/image";

const Container = styled.section`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "info info . ."
      "description description social social";

    grid-auto-rows: minmax(100px, auto);

    .info {
      grid-area: info;
    }
    .description {
      grid-area: description;
    }
    .social {
      grid-area: social;
    }
  }
`;

const Logo = styled(Image)`
  border-radius: 5px;
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ExchangeStyled = {
  Container,
  Logo,
  Details,
  SocialIconsContainer,
};
