import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`;

export const Small = styled.div`
  font-size: 0.8rem;
`;

export const Box = styled.section<{
  column?: boolean;
  flex?: string;
  alignItems?: string;
  border?: string;
  padding?: string;
}>`
  width: 100%;
  padding: ${({ padding }): string => padding || "1rem"};
  flex: ${({ flex }): string => flex || "1"};

  border: ${({ border, theme }): string =>
    border ? border : `1px solid ${theme.colors.brightGray}`};
  border-radius: 0.5rem;

  display: flex;
  align-items: ${({ alignItems }): string => alignItems || "start"};
  flex-direction: ${({ column }): string => (column ? "column" : "row")};
  gap: 1rem;
`;

export const AButton = styled.a`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.brightGray};
  border-radius: 0.5rem;
  font-size: 0.8rem;

  padding: 0.4rem 0.8rem;
  margin: 1rem 0;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.brightGray};
    box-shadow: 0 0 5px 0 ${({ theme }) => theme.colors.brightGray};
  }
`;

export const TrustRankCircle = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 20px;
  height: 20px;
  padding: 0.8rem;

  color: ${({ theme }): string => theme.colors.coinGeckoYellow};
  border-radius: 5px;
  background-color: ${({ theme }): string => theme.colors.coinGeckoGreen};

  @media only screen and (min-width: 1025px) {
    width: 30px;
    height: 30px;
    padding: 1rem;
    font-size: 1rem;
  }
`;
