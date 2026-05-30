# Database package

Este pacote contém o schema Prisma e scripts relacionados ao banco de dados.

Comandos úteis:

```bash
cd packages/database
pnpm install
pnpm prisma:generate
pnpm prisma:migrate:dev --name init
pnpm prisma:studio
```

Edite a variável `DATABASE_URL` no arquivo `.env` antes de rodar migrations.
