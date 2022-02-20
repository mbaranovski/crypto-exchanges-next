import { Exchange } from "../../services/CoinGeckoService/CoinGeckoService.types";
import { Slack } from "@styled-icons/boxicons-logos/Slack";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Reddit } from "@styled-icons/boxicons-logos/Reddit";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";

type SocialMediaUrlObject = {
  url: string;
  logo: JSX.Element;
};

const hasFullUrl = (url: string) => url.includes("http");

export const generateSocialMediaUrls = (
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
