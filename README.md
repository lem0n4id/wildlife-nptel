# Project Analysis

## Configuration Files
- **.eslintrc.json**: ESLint configuration for linting JavaScript/TypeScript code.
- **next.config.mjs**: Next.js configuration for server-side rendering and static site generation.
- **package.json**: Project metadata and dependencies.
- **postcss.config.mjs**: PostCSS configuration for transforming CSS.
- **tailwind.config.ts**: Tailwind CSS configuration for utility-first CSS framework.
- **tsconfig.json**: TypeScript configuration specifying compiler options.

## Source Code Structure
- **src/app**: Main application directory.
  - **fonts/**: Contains font files (`GeistMonoVF.woff`, `GeistVF.woff`).
  - **globals.css**: Global CSS styles.
  - **layout.tsx**: Layout component for the application.
  - **page.tsx**: Main page component.
  - **quiz/**: Directory for quiz-related pages.
    - **[week]/page.tsx**: Dynamic route for weekly quizzes.
    - **page.tsx**: Main quiz page component.
- **src/components**: Reusable components.
  - **Quiz.tsx**: Component for displaying quizzes.
  - **WeekSelector.tsx**: Component for selecting weeks.
- **src/data**: Data-related files.
  - **questions.ts**: Contains quiz questions data.
- **src/types**: TypeScript type definitions.
  - **Question.ts**: Type definition for a quiz question.

## Packages and Dependencies
Based on `package.json`:
- **Next.js**: For server-side rendering and static site generation.
- **React**: For building user interfaces.
- **TypeScript**: For static type checking.
- **ESLint**: For linting JavaScript/TypeScript code.
- **PostCSS**: For transforming CSS.
- **Tailwind CSS**: For utility-first CSS styling.
- **pnpm**: For package management (indicated by `pnpm-lock.yaml`).

## Features
- **Dynamic Routing**: `[week]/page.tsx` indicates dynamic routing for weekly quizzes.
- **Reusable Components**: Components like `Quiz.tsx` and `WeekSelector.tsx` suggest a modular UI approach.
- **TypeScript Types**: `Question.ts` indicates the use of TypeScript for type safety.
- **Styling**: Global styles in `globals.css` and utility-first styling via Tailwind CSS.
  
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
