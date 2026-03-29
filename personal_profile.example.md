# Your name — Personal Profile (example)

Copy this file to **`personal_profile.md`** in the repo root on your machine only.
That file is **gitignored** so detailed personal data stays off GitHub.

## How the digital twin loads this (priority)

1. **`PERSONAL_PROFILE_MARKDOWN`** (environment variable) — set this on **Vercel** (Settings → Environment Variables). Paste your full markdown there so production uses the same depth as local, without committing the file.
2. **`personal_profile.md`** in the project root — used automatically in local dev when the env var is unset.
3. If neither exists, the API uses a short **built-in public summary** in code.

Never commit real `personal_profile.md` or put the full text in the repo.

## Basics

- **Name:** Your Name
- **Email:** your@email.com
- **LinkedIn:** https://www.linkedin.com/in/you
- **GitHub:** https://github.com/you

---

## Work Experience

(Add sections the model should know about.)

---

## Projects

(Add projects, dates, and facts — avoid secrets, private employer details you cannot share, and phone numbers.)
