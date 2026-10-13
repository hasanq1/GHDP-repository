# GHDP developer handoff

Current independent fork, including the cleaned-up proposed agenda. Stack: React, TypeScript, Vinext, Cloudflare Workers, D1 and Drizzle.

Use Node.js >=22.13 and the pnpm version in package.json. Run `pnpm install --frozen-lockfile`, `pnpm dev`, and `pnpm build`. See README.md for local database migrations and deployment guidance.

The .openai/hosting.json identifies the hosted fork. GitHub pushes do not automatically deploy to ChatGPT Sites. Form submissions require D1 bound as DB and the included migrations. No production submission data or credentials are included.
