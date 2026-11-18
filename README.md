# Hors Champ

Vidéoclub indépendant de démo, ambiance cinéma de minuit.
Projet portfolio : comptes membres, location fictive avec retours et amendes,
boutique (Stripe en mode test), espace admin.

## Stack
- Node.js + Express
- PostgreSQL 16 + Prisma
- Vues rendues côté serveur

## Lancer le projet en local
Prérequis : Node.js 24.

```bash
npm install      # installe les dépendances
npm run dev      # démarre le serveur avec rechargement automatique (nodemon)
```

Le serveur écoute sur http://localhost:3000 (modifiable avec la variable `PORT`).
Pour vérifier qu'il répond :

```bash
curl localhost:3000/health   # → {"status":"ok"}
```

En production : `npm start` (sans rechargement automatique).

_Base de données et autres étapes : à compléter au fil des milestones._

## Organisation
Le travail est découpé en milestones (M0 à M7) et en issues GitHub.
Le journal de bord est dans [`docs/journal.md`](docs/journal.md).