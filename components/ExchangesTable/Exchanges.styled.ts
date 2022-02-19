import styled from "styled-components";

const SiteHref = styled.a`
  font-size: 0.8rem;
  opacity: 0.6;

  &:hover {
    text-decoration: underline;
  }
`;

const TableNameColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  white-space: nowrap;
`;

const TableCountryColumn = styled.div`
  font-size: 0.8rem;
`;

const Name = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const NameWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.4rem;
`;

export const Wrapper = styled.section``;

export const ExchangesStyled = {
  Wrapper,
  SiteHref,
  TableNameColumn,
  TableCountryColumn,
  Name,
  NameWrapper,
};
