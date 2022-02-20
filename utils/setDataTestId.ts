export const setDataTestId =
  (testId: string) => (props: { "data-testid"?: string }) => ({
    "data-testid": props["data-testid"] || testId,
  });
