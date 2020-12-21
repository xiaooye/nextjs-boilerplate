This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

- Personal Server-Side Rendering Starter App made with Next.js, NextAuth, Typescript, and Tailwind CSS with Emotion 
- Formatted with Stylelint, Eslint, and Prettier
- Configured with Jest Testing Library 
  
## Getting Started

1.  Clone the repository and change directory.
  
```
git clone https://github.com/xiaooye/nextjs-example.git
cd nextjs-example
```

2. add database support for Login with NextAuth followed by .env.local.example

```
cp .env.local.example .env.local
```

- See [next-auth example](https://github.com/nextauthjs/next-auth-example) for more information and documentation.

3. run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Things To Do

- [x] Adding Jest
  - [ ] Adding Jest Tests
  - [ ] Adding React Test Library
- [ ] Adding CSS
  - [ ] Responsive CSS
- [ ] Adding State Management (Recoil?/Redux?/React Context?)
- [x] Eslint?
- [ ] Database Support
