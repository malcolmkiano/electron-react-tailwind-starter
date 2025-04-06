# Electron React Tailwind Starter

A simple, fast Electron starter using **Vite**, **React**, and **Tailwind CSS**, wired up with **Electron Forge**. It’s TypeScript-based and ready for production, with clean defaults and no unnecessary extras.

## Features

- **Electron Forge** handles packaging, builds, and native installers.
- **Vite** powers fast builds for the main, preload, and renderer processes.
- **TypeScript** is used across the stack.
- **Tailwind CSS** is included for styling.
- **Jest** for unit testing (main and renderer).
- **Linting & formatting** with ESLint, Prettier, Husky, and lint-staged.
- **Electron Fuses** disables risky features by default.

## Project Structure

```
electron-react-tailwind-starter
├── src/
│   ├── main.ts                  # Electron main process entry
│   ├── preload.ts               # Preload script for secure APIs
│   ├── main/
│   │   ├── create-window.ts     # Sets up the main BrowserWindow
│   │   ├── setup-preload.ts     # Exposes safe APIs via contextBridge
│   └── renderer/
│       ├── index.tsx            # React renderer entry
│       ├── app.tsx              # Main React component
│       └── styles/
│           └── index.css        # TailwindCSS entry
├── index.html                   # Base HTML shell
├── forge.config.ts              # Electron Forge + Vite config
├── vite.main.config.ts          # Vite config for main process
├── vite.preload.config.ts       # Vite config for preload script
├── vite.renderer.config.mts     # Vite config for renderer + Tailwind
├── tsconfig.json                # TypeScript base config
├── tsconfig.vite.json           # Vite-specific TS overrides
├── jest.config.main.ts          # Jest config for main process
├── jest.config.renderer.ts      # Jest config for renderer
├── package.json                 # Scripts and dependencies
└── .husky/
    └── pre-commit               # Git pre-commit hook for testing and linting
```

## Scripts

| Command              | What it does                             |
| -------------------- | ---------------------------------------- |
| `yarn start`         | Runs the app in dev mode                 |
| `yarn make`          | Builds installers                        |
| `yarn package`       | Builds without packaging                 |
| `yarn publish`       | Publishes the app                        |
| `yarn lint`          | Runs the linter                          |
| `yarn prepare`       | Sets up Git hooks with Husky             |
| `yarn test`          | Runs all Jest tests                      |
| `yarn test:main`     | Runs tests for the Electron main process |
| `yarn test:renderer` | Runs tests for the React renderer        |
| `yarn test:watch`    | Runs all tests in watch mode             |

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/malcolmkiano/electron-react-tailwind-starter.git
cd electron-react-tailwind-starter
yarn
```

### 2. Run in Dev Mode

```bash
yarn start
```

This launches the app with Vite dev server + HMR for the renderer.

## Tailwind Setup

Tailwind is set up through the `@tailwindcss/vite` plugin and wired into the renderer build.

Edit styles in:

```css
src/renderer/styles/index.css
```

## Linting & Formatting

- **ESLint** for code quality
- **Prettier** for consistent formatting
- **Husky** + **lint-staged** to run checks before commits

Config files: `.eslintrc`, `.prettierrc`, `package.json`.

## Testing

- **Jest** is used for testing both the **main** (Electron) and **renderer** (React) processes.
- Tests live alongside implementation or under `__tests__`.
- `testEnvironment` is set appropriately per process (`node` for main, `jsdom` for renderer).
- Setup file for DOM assertions: `src/renderer/jest.setup.ts`

Run all tests:

```bash
yarn test
```

Or isolate:

```bash
yarn test:main      # For Electron main process
yarn test:renderer  # For React renderer
yarn test:watch     # Live feedback during dev
```

## Electron Fuses

Security features are turned off by default via `@electron/fuses`, including:

- Node CLI arguments
- Node options from env
- Running as plain Node
- ASAR integrity bypass

You can change these in `forge.config.ts`.

## Acknowledgements

Built on top of the [Electron Forge Vite + TypeScript template](https://www.electronforge.io/templates/vite-+-typescript), with added React, Tailwind CSS, and dev tooling.

## License

MIT — free to use for anything.
