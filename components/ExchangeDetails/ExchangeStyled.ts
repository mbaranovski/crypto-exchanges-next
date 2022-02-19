import styled from "styled-components";
import Image from "next/image";

const Container = styled.section`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "info info . ."
      "description description social social"
      ". . . .";

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

const TrustRankCircle = styled.div`
  font-size: 1rem;
  color: #f9e988;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  padding: 1rem;
  border-radius: 5px;
  background-color: #8cc63f;
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
  TrustRankCircle,
  Logo,
  Details,
  SocialIconsContainer,
};
