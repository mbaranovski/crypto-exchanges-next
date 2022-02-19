import { AppName, HeaderStyled } from "./Header.styled";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Image
          alt="Coin Gecko Logo"
          src="/coinGeckoLogo.svg"
          height={30}
          width={30}
        />
        <AppName>Coin Gecko Directory</AppName>
      </HeaderStyled>
    </>
  );
};
