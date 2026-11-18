# Journal de bord — Hors Champ

Une entrée par issue : ce que j'ai fait, ce que j'ai appris, les choix faits.

---

## #1 — Préparer l'environnement WSL
**Fait** : Node v24 via nvm, PostgreSQL 16 installé, rôle `obistafff` et base `hors_champ` créés,
gh installé et connecté, repo cloné dans `~/projects/hors-champ`.

**Appris** :
- Sous Ubuntu, `postgresql.service` ne fait que lancer le vrai serveur (`postgresql@16-main`),
  d'où le statut `active (exited)`.
- Un rôle PostgreSQL du même nom que l'utilisateur Linux permet de se connecter sans préciser `-U`.
- WSL n'a pas de navigateur : `gh auth login` passe par un code à saisir sur github.com/login/device.

## #7 — CLAUDE.md, journal et README
**Fait** : règles de travail pour Claude Code, ce journal, README de départ.

**Appris** :
- Claude Code lit `CLAUDE.md` à chaque session : les règles n'ont pas à être répétées.