import { Table, Td, Th, THead, Tr } from "./Exchanges.styled";

export const Exchanges = () => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>Name</Th>
          <Th>Country</Th>
          <Th>Trust Rank</Th>
          <Th>Site</Th>
        </Tr>
      </THead>
      <tbody>
        <tr>
          <Td>Name</Td>
          <Td>Country</Td>
          <Td>Trust</Td>
          <Td>Site</Td>
        </tr>
      </tbody>
    </Table>
  );
};

//logo, name, country, trust rank, URL)
