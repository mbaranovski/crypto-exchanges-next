import { HeaderStyled } from "./Header.styled";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/">
          <a>Coin Gecko Directory</a>
        </Link>
      </HeaderStyled>
    </>
  );
};
