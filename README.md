# Nata Website – Standalone + Modular

**index.html is now standalone.** It directly loads `styles.css` and `script.js` with
relative paths and does not require Vite, ES modules, or a local development server.

You can simply open `index.html` in a browser.

The larger modular Vite implementation remains under `src/` and can be started with:
`npm install` then `npm run dev`.

The supplied artwork remains under `public/assets/`.
