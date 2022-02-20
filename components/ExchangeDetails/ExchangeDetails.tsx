import { Exchange } from "../../services/CoinGeckoService/CoinGeckoService.types";
import React, { FC, useMemo } from "react";
import { ExchangeStyled } from "./ExchangeStyled";
import {
  AButton,
  Box,
  Heading,
  Small,
  TrustRankCircle,
} from "../shared.styled";
import Link from "next/link";
import { generateSocialMediaUrls } from "./generateSocialMediaUrls";

export const ExchangeDetails: FC<{ exchange: Exchange }> = ({ exchange }) => {
  const socialMediaUrls = useMemo(
    () => generateSocialMediaUrls(exchange),
    [exchange]
  );

  return (
    <>
      <Link href="/" passHref>
        <AButton>Go back</AButton>
      </Link>
      <ExchangeStyled.Container>
        <Box
          className="info"
          alignItems="center"
          data-testid="exchange-info-box"
        >
          <ExchangeStyled.Logo
            unoptimized
            width={70}
            height={70}
            src={exchange.image}
            alt={`${exchange.name} logo image`}
            className="logo"
          />
          <ExchangeStyled.Details>
            <div>
              <Heading>{exchange.name}</Heading>
              <Small>Since: {exchange.year_established}</Small>
              <Small>From: {exchange.country}</Small>
            </div>
            <div>
              <TrustRankCircle>{exchange.trust_score_rank}</TrustRankCircle>
            </div>
          </ExchangeStyled.Details>
        </Box>

        <Box
          column
          className="description"
          data-testid="exchange-description-box"
        >
          <Heading>Description</Heading>
          <p>{exchange.description || "No description provided"}</p>
        </Box>

        <Box column className="social" data-testid="exchange-social-box">
          <Heading>Social Media</Heading>
          <ExchangeStyled.SocialIconsContainer>
            {socialMediaUrls.length ? (
              socialMediaUrls.map((social) => (
                <Link key={social.url} href={social.url}>
                  <a target="_blank" data-testid="social-media-icon">
                    {social.logo}
                  </a>
                </Link>
              ))
            ) : (
              <span>No social media urls provided</span>
            )}
          </ExchangeStyled.SocialIconsContainer>
        </Box>
      </ExchangeStyled.Container>
    </>
  );
};
