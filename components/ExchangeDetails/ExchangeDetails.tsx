import { Exchange } from "../../services/CoinGeckoService/CoinGeckoService.types";
import React, { FC, useMemo } from "react";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { Slack } from "@styled-icons/boxicons-logos/Slack";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Reddit } from "@styled-icons/boxicons-logos/Reddit";
import { ExchangeStyled } from "./ExchangeStyled";
import {
  AButton,
  Box,
  Heading,
  Small,
  TrustRankCircle,
} from "../shared.styled";
import Link from "next/link";

type SocialMediaUrlObject = {
  url: string;
  logo: JSX.Element;
};

const hasFullUrl = (url: string) => url.includes("http");

const generateSocialMediaUrls = (
  exchange: Exchange
): SocialMediaUrlObject[] => {
  const urls: SocialMediaUrlObject[] = [];

  if (exchange.slack_url)
    urls.push({
      logo: <Slack width={30} height={30} />,
      url: exchange.slack_url,
    });

  if (exchange.twitter_handle)
    urls.push({
      logo: <Twitter width={30} height={30} />,
      url: hasFullUrl(exchange.twitter_handle)
        ? exchange.twitter_handle
        : `https://twitter.com/${exchange.twitter_handle}`,
    });

  if (exchange.reddit_url)
    urls.push({
      logo: <Reddit width={30} height={30} />,
      url: hasFullUrl(exchange.reddit_url)
        ? exchange.reddit_url
        : `https://reddit.com${exchange.reddit_url}`,
    });

  if (exchange.telegram_url)
    urls.push({
      logo: <Telegram width={30} height={30} />,
      url: hasFullUrl(exchange.telegram_url)
        ? exchange.telegram_url
        : `https://t.me/${exchange.telegram_url}`,
    });

  if (exchange.facebook_url)
    urls.push({
      logo: <FacebookCircle width={30} height={30} />,
      url: hasFullUrl(exchange.facebook_url)
        ? exchange.facebook_url
        : `https://facebook.com/${exchange.facebook_url}`,
    });

  return urls;
};

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
        <Box gap="1rem" className="info" alignItems="center">
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

        <Box column className="description">
          <Heading>Description</Heading>
          <p>{exchange.description || "No description provided"}</p>
        </Box>

        <Box column gap="1rem" className="social">
          <Heading>Social Media</Heading>
          <ExchangeStyled.SocialIconsContainer>
            {socialMediaUrls.length
              ? socialMediaUrls.map((social) => (
                  <Link key={social.url} href={social.url}>
                    <a target="_blank">{social.logo}</a>
                  </Link>
                ))
              : null}
            {!socialMediaUrls.length && (
              <span>No social media urls provided</span>
            )}
          </ExchangeStyled.SocialIconsContainer>
        </Box>
      </ExchangeStyled.Container>
    </>
  );
};

// social media links, description, and a back-to-main-page button.
