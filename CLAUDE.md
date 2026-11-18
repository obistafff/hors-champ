# Hors Champ — règles de travail

## Contexte
Hors Champ est un vidéoclub indépendant de démo : comptes membres, location fictive
avec dates de retour et amendes, boutique avec Stripe en mode test, espace admin.
C'est un projet portfolio pour montrer des compétences backend.

Stack : Node.js (ES modules) + Express, PostgreSQL 16 + Prisma, vues rendues côté serveur.
Environnement : WSL (Ubuntu), VS Code, terminal.

## Je suis en apprentissage
- Avance par petites étapes. Une étape = un changement que je peux relire en entier.
- Avant d'écrire du code, explique ce que tu vas faire et pourquoi. Attends ma validation.
- Explique chaque fichier créé et chaque choix technique, en français, simplement.
- Ne passe jamais à l'étape suivante sans mon accord.
- Montre-moi les commandes terminal à lancer plutôt que de tout faire à ma place,
  surtout pour git, npm, psql et prisma.
- Quand il existe plusieurs façons de faire, présente-les brièvement et recommande-en une.

## Organisation
- Une issue GitHub = une branche = une pull request.
- Nom de branche : `type/numero-description` (ex. `feat/9-inscription`).
- Commits au format Conventional Commits, en français :
  `feat(auth): inscription avec hachage argon2`
- Ne touche qu'aux fichiers concernés par l'issue en cours.
- À la fin d'une issue, propose-moi une entrée pour `docs/journal.md`.

## Conventions de code
- Fichiers et dossiers en kebab-case, variables et fonctions en camelCase.
- Tables PostgreSQL en snake_case (via `@@map` dans Prisma).
- Aucun secret dans le code : tout passe par `.env`, documenté dans `.env.example`.
- Les textes affichés sur le site sont en français.

## Direction artistique
Cinéma de minuit, classe et sobre (pas de néons) : noir chaud, ivoire, rouge velours,
touches de laiton, titres en serif, jaquettes typographiques.