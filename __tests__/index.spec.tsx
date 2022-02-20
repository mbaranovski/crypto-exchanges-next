import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as td from "testdouble";
import Index from "../pages";
import { mockedExchanges } from "../mocks/exchangesList";
import { NextRouter } from "next/dist/shared/lib/router/router";

describe("Index page", () => {
  test("should render welcome box", async () => {
    render(<Index exchanges={[]} />);

    await screen.findByText("Welcome!");
    await screen.findByTestId("exchanges-welcome-msg");
  });

  test("should render table with provided exchanges", async () => {
    render(<Index exchanges={mockedExchanges} />);

    await screen.findByTestId("exchange-logo");
    await screen.findByText("Binance");
    await screen.findByText("binance.com");
    await screen.findByText("Cayman Islands");
    const trustRank = await screen.findByTestId("exchange-trust-rank");
    expect(trustRank.innerHTML).toEqual("1");
  });

  test("should navigate to exchange details page when clicked on row", async () => {
    const routerMock = td.object<NextRouter>();

    render(
      <RouterContext.Provider value={routerMock}>
        <Index exchanges={mockedExchanges} />
      </RouterContext.Provider>
    );

    (await screen.findByTestId("exchange-item-row")).click();

    td.verify(routerMock.push("/exchange/binance"));
  });
});
