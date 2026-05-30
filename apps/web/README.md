# Web (Next.js) app

Instruções básicas para rodar o frontend e configurar autenticação (Auth.js + Prisma).

1. Instalar dependências no root:

```bash
pnpm install
```

2. Criar `.env` baseado no arquivo `/.env.example` e adicionar `NEXTAUTH_SECRET` e `NEXTAUTH_URL`.

3. Exemplo de configuração Auth.js (arquivo sugerido: `apps/web/lib/auth.ts`):

```ts
import { auth } from '@auth/core'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // adicionar providers (e.g., Credentials, Google, etc.)
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export default function handler(req, res) {
  return auth(req, res, authOptions)
}
```

4. Rodar em desenvolvimento:

```bash
pnpm dev:web

Endpoints de autenticação (exemplo simples JWT):

- `POST /api/auth/signup` { email, name?, password }
- `POST /api/auth/login` { email, password } → retorna `{ token }`

Antes de rodar, gere o client Prisma e rode migrations no pacote `packages/database`:

```bash
pnpm --filter @manager-leader-ia/database prisma:generate
pnpm --filter @manager-leader-ia/database prisma:migrate:dev --name init
```

```
