# rat

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/joseph-beck/rat/checks.yml?label=checks)
![GitHub Release](https://img.shields.io/github/v/release/joseph-beck/rat)
![GitHub License](https://img.shields.io/github/license/joseph-beck/rat)

## about

(r)eact (a)pp (t)emplate!

a template to quickly start building react applications using tanstack router and shad.

## get started

```bash
# 1. clone the repo
git clone https://github.com/joseph-beck/rat
# 1.1 optionally remove existing git repo and init your own
rm -rf .git
git init

# 2. install pnpm if missing
npm i -g pnpm

# 3. install packages
pnpm install

# 4. run your app
pnpm run dev

# 5. connect on localhost:5173!
```

## built using

- React
- Vite
- Vitest
- TanStack Router
- pnpm
- TailwindCSS
- Playwright

## commands

| Command       | Usage                                                |
| ------------- | ---------------------------------------------------- |
| dev           | Run your app!                                        |
| build         | Build your app!                                      |
| check         | Check the formatting of your app with prettier.      |
| fmt           | Format files in your app with prettier.              |
| e2e           | End to end testing using Playwright.                 |
| test          | Unit testing using Vitest.                           |
| test:coverage | Get a coverage report of your unit test with Vitest. |
| lint          | Lint your project using Eslint                       |
| lint:fix      | Fix any linting issues automatically with Eslint.    |
