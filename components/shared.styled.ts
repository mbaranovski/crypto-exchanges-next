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
  gap?: string;
  flex?: string;
  alignItems?: string;
}>`
  padding: 1rem;
  flex: ${({ flex }): string => flex || "1"};

  border: 1px solid #f4f4f6;
  border-radius: 0.5rem;

  display: flex;
  align-items: ${({ alignItems }): string => alignItems || "start"};
  flex-direction: ${({ column }): string => (column ? "column" : "row")};
  gap: ${({ gap }): string => gap || "0"};
`;

export const AButton = styled.a`
  display: inline-block;
  border: 1px solid #f4f4f6;
  border-radius: 0.5rem;
  font-size: 0.8rem;

  padding: 0.4rem 0.8rem;
  margin: 1rem 0;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border: 1px solid #9fa3bb;
    box-shadow: 0 0 5px 0 #9fa3bb61;
  }
`;
