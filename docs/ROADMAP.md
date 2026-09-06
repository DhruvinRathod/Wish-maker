# Wish Maker Roadmap

## Phase 1 — MVP foundation
- [x] Next.js + React app shell
- [x] Landing page
- [x] Creator form
- [x] Shareable wish URL
- [x] Interactive birthday flow
- [x] English, Hindi, Gujarati starter locales
- [x] Core tests and CI

## Phase 2 — Rich birthday experiences
- [ ] Theme system
- [ ] Photo and memory frames
- [ ] Confetti / cake interactions
- [ ] Countdown and birthday unlock time
- [ ] Copy/share controls

## Phase 3 — Accounts and persistence
- [ ] Authentication
- [ ] PostgreSQL + Prisma
- [ ] Save/edit/delete portals
- [ ] Creator dashboard
- [ ] Portal status: draft, scheduled, sent, opened

## Phase 4 — Birthday automation
- [ ] Birthday contact records
- [ ] Yearly recurrence and timezone handling
- [ ] Google Calendar import/sync
- [ ] Scheduled email delivery
- [ ] Delivery history and retry strategy

## Phase 5 — Social features
- [ ] Collaborative wish links
- [ ] Friend contributions
- [ ] Voice notes / media
- [ ] Future-self birthday capsule

## Phase 6 — Messaging channels
- [ ] SMS provider integration
- [ ] WhatsApp Business-compatible delivery
- [ ] Consent, templates, failure handling, and rate limits

## Suggested architecture once persistence lands

```text
Browser
  ↓
Next.js App Router
  ├─ Creator UI
  ├─ Recipient Portal
  └─ API / Server Actions
       ↓
PostgreSQL + Prisma
       ↓
Scheduler / Queue
  ├─ Email provider
  ├─ Google Calendar
  └─ SMS / WhatsApp (later)
```

## MVP acceptance criteria

A user should be able to open the homepage, create a wish in one of the supported languages, generate a shareable URL, open that URL, and complete the interactive birthday sequence on desktop or mobile.
