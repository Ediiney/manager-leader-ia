# API (NestJS)

Este diretório contém a API backend (NestJS) e integrações com Prisma.

Passos recomendados:

1. Instalar dependências no workspace:

```bash
npm install
```

2. Iniciar a API em desenvolvimento:

```bash
npm --workspace apps/api run dev
```

3. Usar endpoints:

- `GET http://localhost:3333/` — status da API
- `GET http://localhost:3333/leads/search?q=Dentistas` — busca de leads de exemplo

4. Conectar com `DATABASE_URL` e usar `@prisma/client` para persistência.
