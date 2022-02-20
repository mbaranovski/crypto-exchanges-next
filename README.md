https://crypto-exchanges-next.vercel.app/

## Description

Next.js projected featuring Server-side generation of static pages with incremental static regeneration. Data is provided by the publicly available [CoinGecko API](https://www.coingecko.com/en/api/documentation).

## Requirements

- NodeJS >= 14.x

## Development

First time use:

```shell
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run unit tests:

```shell
npm run test
```

Run E2E Cypress tests:

```shell
npm run e2e
```

## Deployment

Repository has several quality gates setup in order to provide formatting consistency, best practices and code quality on the decent level.

Code pushed to **non** master branch:
This triggers:

- `build_and_test` - GH job which will run unit tests, linting, code formatting checks
- `preview deployment` - Vercel preview deployment. Will post preview URL in the PR's message
- `e2e` - **only** if `preview deployment` successfully deploys and runs the Cypress E2E tests against environment deployed by the previous job

Code pushed to **master** branch:

- `build_and_test` - GH job which will run unit tests, linting, code formatting checks
- `production deployment` - Vercel production deployment
- `e2e` - **only** if `preview deployment` successfully deploys and runs the Cypress E2E tests against environment deployed by the previous job
