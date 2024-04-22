This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Libraries Used

- Date FNS for date formatting and related calculations
- clsx for conditional styling
- next cookies for session storage
- jest for unit testing

## Getting Started

Add a `.env.local` file to the root of this project. Within this file define one variable `API_PATH` and give it the value of the base url and version for auth, feeds, and posts.

Redacted example:

```
API_PATH=https:**********/v1
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Once you have the app running, you will be redirected to `/login`. There you can login with the demo username and password provided in the challenge google doc.

## Tests

There is one unit test for the date helpers. Run `npm run test` or `npm run test:watch`.
