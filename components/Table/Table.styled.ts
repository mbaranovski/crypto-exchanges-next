import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  background-color: #f9f9fb;

  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #f4f4f6;
  border-radius: 0.5rem;

  th,
  td {
    padding: 1rem 0.5rem;

    &:last-of-type {
      text-align: center;
    }

    @media only screen and (min-width: 576px) {
      padding: 1rem;
    }
  }
`;

export const THead = styled.thead`
  text-align: left;
  height: 3rem;
`;

export const Tr = styled.tr`
  &:last-of-type td {
    border: 0;
  }

  &:first-of-type td {
    border-top: 1px solid #f4f4f6;
  }
`;

export const Th = styled.th`
  font-size: 0.8rem;
  font-weight: normal;
`;

export const Td = styled.td`
  font-size: 0.9rem;
  background-color: white;
  border-bottom: 1px solid #f4f4f6;

  transition: background-color 0.1s ease-out;

  ${Tr}:hover & {
    background-color: #f9f9fb;
    cursor: pointer;
  }
`;
