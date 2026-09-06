# Wish Maker 🎂

Wish Maker is an interactive, multilingual birthday wish portal. A creator enters a recipient name, sender name, language, and message; the app generates a shareable birthday link that opens into a frame-by-frame surprise.

## MVP included in this PR

- Landing page and demo
- Birthday wish creator form
- Shareable dynamic wish URLs
- Interactive recipient experience
- English, Hindi, and Gujarati UI copy
- Responsive styling
- Unit tests for URL generation and language fallback
- GitHub Actions CI for test + production build

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Test

```bash
npm test
npm run build
```

## Product roadmap

1. Persist portals in a database instead of URL query parameters.
2. Add themes, photos, confetti, cake interactions, and richer animations.
3. Add authentication and a creator dashboard.
4. Add birthday records and recurring reminders.
5. Integrate Google Calendar birthday imports.
6. Add scheduled email delivery.
7. Add collaborative wishes and future-self capsules.
8. Add optional SMS / WhatsApp delivery integrations.

See `docs/ROADMAP.md` for implementation milestones.
