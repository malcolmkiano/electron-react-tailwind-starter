# Electron React Tailwind Starter

A simple, fast Electron starter using **Vite**, **React**, and **Tailwind CSS**, wired up with **Electron Forge**. It’s TypeScript-based and ready for production, with clean defaults and no unnecessary extras.

## Features

- **Electron Forge** handles packaging, builds, and native installers.
- **Vite** powers fast builds for the main, preload, and renderer processes.
- **TypeScript** is used across the stack.
- **Tailwind CSS** is included for styling.
- **Linting & formatting** with ESLint, Prettier, Husky, and lint-staged.
- **Electron Fuses** disables risky features by default.

## Project Structure

```
electron-react-tailwind-starter
├── src/
│   ├── main.ts               # Electron main process
│   ├── preload.ts            # Preload script
│   └── renderer/
│       ├── index.tsx         # React entry point
│       ├── app.tsx           # Main React component
│       └── styles/index.css  # Tailwind CSS
├── index.html                # HTML shell
├── forge.config.ts           # Electron Forge config
├── vite.*.config.*           # Vite configs
├── tsconfig*.json            # TypeScript configs
├── package.json              # Dependencies and scripts
└── .husky/                   # Git hooks
```

## Scripts

| Command        | What it does                 |
| -------------- | ---------------------------- |
| `yarn start`   | Runs the app in dev mode     |
| `yarn make`    | Builds installers            |
| `yarn package` | Builds without packaging     |
| `yarn publish` | Publishes the app            |
| `yarn lint`    | Runs the linter              |
| `yarn prepare` | Sets up Git hooks with Husky |

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
