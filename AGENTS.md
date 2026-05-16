# AGENTS

## Cursor Cloud specific instructions

### Overview

Puente Ciudadano is a **frontend-only** React + Vite + Tailwind CSS v4 SPA. There is no backend, database, or API. All content is static/hardcoded.

### Running the dev server

```
npm run dev
```

Starts Vite on port 5173. The app is served at `http://localhost:5173/puente-ciudadano/` (note the base path configured in `vite.config.js`).

### Build

```
npm run build
```

Outputs static files to `dist/`.

### Lint / Test

No linter or test framework is configured in this project. There are no `lint`, `test`, or `check` scripts in `package.json`.

### Key caveats

- The `base` path is `/puente-ciudadano/` — always use `http://localhost:5173/puente-ciudadano/` when testing locally, not the root URL.
- Node 22 is used in CI (`.github/workflows/deploy.yml`). The environment has Node 22 pre-installed.
- Contact channels (phone numbers, WhatsApp links) are hardcoded in `src/config/contact.js`.
