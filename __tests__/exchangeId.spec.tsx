import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as td from "testdouble";
import { NextRouter } from "next/dist/shared/lib/router/router";
import ExchangeDetailsPage from "../pages/exchange/[exchangeId]";
import { mockedSingleExchange } from "../mocks/exchangeItem";
import { layoutTheme } from "../theme";
import { ThemeProvider } from "styled-components";

describe("Exchange Details page", () => {
  test("should render fallback UI if loading page that was not Server Side generated before", async () => {
    const routerMock = td.object<NextRouter>();

    //@ts-expect-error to avoid defining the whole router object
    routerMock.isFallback = true;

    render(
      <RouterContext.Provider value={routerMock}>
        <ExchangeDetailsPage exchange={mockedSingleExchange} />
      </RouterContext.Provider>
    );

    await screen.findByText("loading...");
  });

  test("should render exchange not found UI if exchange with provided ID does not exist", async () => {
    const routerMock = td.object<NextRouter>();

    //@ts-expect-error to avoid defining the whole router object
    routerMock.isFallback = false;

    render(
      <RouterContext.Provider value={routerMock}>
        <ExchangeDetailsPage exchange={null} />
      </RouterContext.Provider>
    );

    await screen.findByText("exchange not found");
  });

  test("should render exchange details", async () => {
    const routerMock = td.object<NextRouter>();

    //@ts-expect-error to avoid defining the whole router object
    routerMock.isFallback = false;

    td.when(routerMock.prefetch("/"), { ignoreExtraArgs: true }).thenResolve();

    render(
      <RouterContext.Provider value={routerMock}>
        <ThemeProvider theme={layoutTheme}>
          <ExchangeDetailsPage exchange={mockedSingleExchange} />
        </ThemeProvider>
      </RouterContext.Provider>
    );

    await screen.findByText("Binance");
    await screen.findByText("Since: 2017");
    await screen.findByText("From: Cayman Islands");
    await screen.findByText("Description");
    await screen.findByText("This is description");
    await screen.findByText("Social Media");
    const links = await screen.findAllByTestId("social-media-icon");
    expect(links).toHaveLength(3);
  });
});
