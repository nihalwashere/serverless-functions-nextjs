# Random Jokes - Next.js

A random joke generator built using Next.js Serverless Functions

Check the `pages/api` folder for the available API routes.

ROUTE - `/api/hello` - Say hello

```json
{
  "message": "Hello!"
}
```

ROUTE - `/api/joke` - Generate a random joke

```json
{
  "data": {
    "id": "HQuXvkjqcpb",
    "joke": "Where does Napoleon keep his armies? In his sleevies.",
    "status": 200
  }
}
```

Demo screenshots,

<img src="one.png" alt="One" />

<img src="two.png" alt="Two" />

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
