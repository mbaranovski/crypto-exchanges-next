import React, { FC, useMemo } from "react";
import { Td, Tr } from "../Table/Table.styled";
import { ExchangesStyled } from "./Exchanges.styled";
import Image from "next/image";
import Link from "next/link";
import { ExchangeListItem } from "../../services/CoinGeckoService/CoinGeckoService.types";
import { useRouter } from "next/router";
import { ExchangeStyled } from "../ExchangeDetails/ExchangeStyled";
import { TrustRankCircle } from "../shared.styled";

const fromUrlStringToUrlObject = (url: string) => ({
  readableHrefName: new URL(url).host.toString().replace("www.", ""),
  externalHref: url,
});

export const ExchangesTableRow: FC<{
  exchange: ExchangeListItem;
}> = ({ exchange }) => {
  const router = useRouter();

  const { readableHrefName, externalHref } = useMemo(
    () => fromUrlStringToUrlObject(exchange.url),
    [exchange.url]
  );
  return (
    <Tr onClick={() => router.push(`/exchange/${exchange.id}`)}>
      <Td>
        <ExchangesStyled.TableNameColumn>
          <Image
            unoptimized
            width={35}
            height={35}
            src={exchange.image}
            alt={`${exchange.name} logo image`}
          />
          <ExchangesStyled.NameWrapper>
            <ExchangesStyled.Name>{exchange.name}</ExchangesStyled.Name>
            <Link href={externalHref} passHref>
              <ExchangesStyled.SiteHref target="_blank">
                {readableHrefName}
              </ExchangesStyled.SiteHref>
            </Link>
          </ExchangesStyled.NameWrapper>
        </ExchangesStyled.TableNameColumn>
      </Td>
      <Td>
        <ExchangesStyled.TableCountryColumn>
          {exchange.country}
        </ExchangesStyled.TableCountryColumn>
      </Td>
      <Td>
        <TrustRankCircle>{exchange.trust_score_rank}</TrustRankCircle>
      </Td>
    </Tr>
  );
};
