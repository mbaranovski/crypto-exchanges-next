import { useRouter } from "next/router";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExchangeListItem } from "../../services/CoinGeckoService/CoinGeckoService.types";
import { Table, Td, Th, THead, Tr } from "../Table/Table.styled";
import {
  ExchangeName,
  ExchangeSiteHref,
  ExchangeTableCountryColumn,
  ExchangeTableNameColumn,
  NameWrapper,
} from "./Exchanges.styled";

const fromUrlStringToUrlObject = (url: string) => ({
  siteName: new URL(url).host.toString().replace("www.", ""),
  href: url,
});

export const Exchanges: FC<{ exchanges: ExchangeListItem[] }> = ({
  exchanges,
}) => {
  const router = useRouter();

  return (
    <Table>
      <THead>
        <Tr>
          <Th>Name</Th>
          <Th>Country</Th>
          <Th>Trust Rank</Th>
        </Tr>
      </THead>
      <tbody>
        {exchanges.map((exchange) => {
          const { siteName, href } = fromUrlStringToUrlObject(exchange.url);
          return (
            <Tr
              key={`exchange-${exchange.id}`}
              onClick={() => router.push(`/exchange/${exchange.id}`)}
            >
              <Td>
                <ExchangeTableNameColumn>
                  <Image
                    unoptimized
                    width={30}
                    height={30}
                    src={exchange.image}
                    alt={`${exchange.name} logo image`}
                  />
                  <NameWrapper>
                    <ExchangeName>{exchange.name}</ExchangeName>
                    <Link href={href} passHref>
                      <ExchangeSiteHref target="_blank">
                        {siteName}
                      </ExchangeSiteHref>
                    </Link>
                  </NameWrapper>
                </ExchangeTableNameColumn>
              </Td>
              <Td>
                <ExchangeTableCountryColumn>
                  {exchange.country}
                </ExchangeTableCountryColumn>
              </Td>
              <Td>{exchange.trust_score_rank}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

//logo, name, country, trust rank, URL)
