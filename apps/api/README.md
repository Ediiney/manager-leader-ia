# API (NestJS)

Este diretório conterá a API backend (NestJS) e integrações com Prisma.

Passos recomendados:

1. Instalar dependências:

```bash
pnpm install
```

2. Conectar com `DATABASE_URL` e usar `@prisma/client` para acessar o banco.

3. Implementar endpoints de autenticação JWT que consultem a tabela `User` gerada pelo Prisma.
