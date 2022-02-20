import { FC } from "react";
import { ExchangeListItem } from "../../services/CoinGeckoService/CoinGeckoService.types";
import { Table, Th, THead, Tr } from "../Table/Table.styled";
import { ExchangesTableRow } from "./ExchangesTableRow";

export const ExchangesTable: FC<{ exchanges: ExchangeListItem[] }> = ({
  exchanges,
}) => {
  return (
    <Table>
      <colgroup>
        <col span={1} className="align-left" />
      </colgroup>
      <THead>
        <Tr>
          <Th>Name</Th>
          <Th>Country</Th>
          <Th>Trust Rank</Th>
        </Tr>
      </THead>
      <tbody>
        {exchanges.map((exchange) => {
          return (
            <ExchangesTableRow
              key={`exchange-${exchange.id}`}
              exchange={exchange}
            />
          );
        })}
      </tbody>
    </Table>
  );
};
