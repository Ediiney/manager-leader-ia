# Manager Lead Forge AI

Uma plataforma SaaS para gestores de tráfego e agências que desejam adquirir clientes de forma previsível.

## Objetivo

Transformar gestores de tráfego em operações escaláveis de aquisição de clientes com:

- Inteligência Artificial
- Prospecção automatizada
- CRM integrado
- Gestão de projetos
- Gestão financeira
- Agentes IA
- Marketplace de serviços

## Status atual

Este repositório contém o scaffold inicial do projeto, com:

- monorepo em `npm` workspaces
- frontend Next.js (`apps/web`)
- backend NestJS inicial (`apps/api`)
- schema Prisma e `packages/database`
- autenticação básica de usuário com cadastro e login via API
- páginas iniciais de `login` e `signup`

Ainda em desenvolvimento:

- Lead Finder
- CRM completo
- Dashboard
- Agentes IA
- Integrações WhatsApp / Meta
- Infra Docker / deployment

## Como rodar

```bash
cd "C:\Users\Ediney\Documents\Manager Leader IA"
npm install
npm --workspace apps/web run dev
```

Em seguida acesse `http://localhost:3000`.
