import styled from "styled-components";

const SiteHref = styled.a`
  font-size: 0.8rem;
  opacity: 0.6;
  align-self: baseline;

  &,
  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 1025px) {
    text-decoration: none;
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
  gap: 0.4rem;
`;

const Wrapper = styled.section``;

const PageLayout = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  flex-direction: column;

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const ExchangesStyled = {
  Wrapper,
  SiteHref,
  TableNameColumn,
  TableCountryColumn,
  Name,
  NameWrapper,
  PageLayout,
};
