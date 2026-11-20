# Arfa

The Arfa marketing site runs on Next.js 16.4.6 with the App Router. The original Create React App source lives at `D:\arfa`.

## Run locally

```powershell
npm ci
npm run dev
```

- [Home](http://localhost:3000/3arfaMarkting)
- [About](http://localhost:3000/3arfaMarkting/about)

The domain root displays the same empty screen as the original site. The contact form opens a draft in the visitor's email app. The page also displays the agency email address so visitors can copy it into webmail.

## Verify the production build

```powershell
npm run lint
npm run build
npm start
```

See [AGENTS.md](./AGENTS.md) for Next.js documentation, the feature folder structure, and migration parity checks.
