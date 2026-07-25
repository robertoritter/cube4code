# Cube4Code institutional website

A Static, responsive landing page built with plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies.

## Run locally

From this directory, start any static HTTP server, for example:

```bash
python3 -m http.server 8765
```

Then open <http://localhost:8765>.

## Test in the browser

- Confirm the hero renders with the 3D cube and floating pieces animating.
- Click the **EN / PT** toggle in the header and confirm all copy switches language.
- Reload the page and confirm the previously selected language persists (stored in `localStorage` under `cube4code-language`).
- Resize the window / use DevTools responsive mode to check the mobile and tablet breakpoints.
- Check that `prefers-reduced-motion` disables the cube animation.

## Language

The site starts in English. Visitors switch between English and Brazilian Portuguese with the `EN / PT` control in the header. The selection is saved to `localStorage` and restored on the next visit.

## Cloudflare Pages

Create a Pages project connected to the repository and use:

- Framework preset: `None`
- Build command: (leave empty)
- Build output directory: `/` (repository root)

If this folder lives inside a larger repository, set the Pages project's root directory to `website`.
