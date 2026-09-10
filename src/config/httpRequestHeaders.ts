export const HTTP_HEADERS = (accessToken?: string) =>
  accessToken
    ? ({
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      } as const)
    : ({
        "Content-Type": "application/json",
      } as const);
