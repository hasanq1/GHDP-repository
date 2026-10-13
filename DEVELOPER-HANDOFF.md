# GHDP developer handoff

This repository contains the independent website fork with the cleaned-up proposed agenda. React, TypeScript, Vinext, Cloudflare Workers, D1 and Drizzle.

Use Node.js >=22.13 and the pnpm version in package.json. Run `pnpm install --frozen-lockfile`, `pnpm dev`, and `pnpm build`. See README.md for local database migration and deployment guidance.

The .openai/hosting.json identifies the existing hosted fork. GitHub pushes do not automatically deploy to ChatGPT Sites. Form submissions require a D1 database bound as DB and the included migrations. No production submission data or credentials are included.

