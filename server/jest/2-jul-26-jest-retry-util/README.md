This task is a small TypeScript exercise to build a `retry` utility.

The goal is to run an async function, and if it fails, retry it a fixed number of times with a delay between attempts.

The example in `util.ts` defines a `test` function and calls:
`retry(test, { retries: 3, delay: 1000 })`

## How to run

From the `server` folder:

```bash
npm install
npx tsx jest/2-jul-26-jest-retry-util/util.ts
```

## What you should see

When this file runs, it executes the sample call at the bottom of `util.ts`.

You can edit the `test` function and retry options to experiment with:
- how many times retries happen
- how long the delay is between retries
