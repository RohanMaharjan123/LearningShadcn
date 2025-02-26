# LearningShadcn

## Badges

[![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-%23121011.svg?style=for-the-badge&logo=react&logoColor=white)](https://ui.shadcn.com)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js** (v16 or higher recommended)
- A package manager: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```node
      npm install
      # or
      yarn install
      # or
      pnpm install
      # or
      bun install
   ```

3. Running the Development Server:

Start the Next.js development server:

   ```node
      npm run dev
      # or
      yarn dev
      # or
      pnpm dev
      # or
      bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action. The page will auto-update as you make changes to the code.

Editing the App

Modify app/page.tsx to edit the homepage.
Changes are reflected in real-time thanks to Next.js's hot reloading.
Mock API Setup

This project includes a mock API powered by json-server. To run it:

1 Install json-server globally (if not already installed):

```node
npm i -g json-server
```

2 Start the mock API server:

```node
json-server --watch ./_data/b.json --port 4000
```

The API will be available at [http://localhost:4000](http://localhost:4000).

## Learn More

Explore these resources to deepen your understanding of Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
