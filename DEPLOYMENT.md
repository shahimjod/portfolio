# DEPLOYMENT.md

## GitHub → Vercel / Netlify

This is a React + TypeScript + Vite portfolio.

### Local verification
```bash
npm install
npm run lint
npm run build
npm run preview
```

### Git safety
Before committing:
```bash
git status
```
Never commit `.env`, `.env.local`, API keys, tokens, passwords, credentials, or private files.

### Fresh Git history
Only after the repository audit is approved:
```bash
git init
git add .
git commit -m "feat: build personal 3D developer portfolio"
git branch -M main
```

### GitHub
Create the new repository under `shahimjod`, preferably `portfolio`, then:
```bash
git remote add origin <CONFIRMED_GITHUB_REPOSITORY_URL>
git push -u origin main
```
Never force-push without explicit authorization.

### Vercel
Import the GitHub repository.

Build command:
```bash
npm run build
```

Output directory:
```text
dist
```

Install command:
```bash
npm install
```

Then deploy.

### Netlify
Import the GitHub repository.

Build command:
```bash
npm run build
```

Publish directory:
```text
dist
```

Then deploy.

### Resume
The existing resume PDF should remain in `public/`. Verify that the RESUME link uses the exact filename and opens in a new tab.

### Production QA
Test:
- Hero and role animation
- 3D character
- colorful Tech Stack balls
- Resume
- GitHub/LinkedIn/email
- project links
- desktop
- mobile
- no horizontal scrolling
- browser console
- missing assets/textures/models

If client-side routes are introduced later, configure SPA fallback only when needed.
