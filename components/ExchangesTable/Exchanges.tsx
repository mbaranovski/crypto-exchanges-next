import { ExchangeSiteHref, Table, Td, Th, THead, Tr } from "./Exchanges.styled";
import { ExchangeListItem } from "../../services/CoinGeckoService/CoinGeckoService.types";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const fromUrlStringToUrlObject = (url: string) => ({
  siteName: new URL(url).host.toString().replace("www.", ""),
  href: url,
});

export const ExchangeTableNameColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  white-space: nowrap;
`;

export const ExchangeTableCountryColumn = styled.div`
  font-size: 0.8rem;
`;

export const ExchangeName = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const NameWrapper = styled.div`
  overflow: hidden;
`;

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
