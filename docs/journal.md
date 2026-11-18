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

## #2 — Initialiser le projet Node + Express
**Fait** : `package.json` en ES modules, Express 5 et nodemon installés, scripts `dev` et `start`,
`src/app.js` (configuration) séparé de `src/server.js` (démarrage), route `GET /health`
qui renvoie `{"status":"ok"}`. Section « Lancer le projet en local » du README remplie.

**Appris** :
- Un middleware est une fonction `(req, res, next)` traversée par chaque requête, dans l'ordre
  de déclaration : elle passe la main avec `next()` ou répond elle-même. Une route est un
  middleware lié à une URL.
- Séparer `app.js` et `server.js` : l'application peut être importée (par les tests) sans
  ouvrir de port.
- Avec `"type": "module"`, l'extension `.js` est obligatoire dans les `import` locaux.
- `dependencies` (nécessaires au site) vs `devDependencies` (outils de dev) ;
  `package-lock.json` se committe pour figer les versions exactes.
- Une requête sans route correspondante reçoit un 404 « Cannot GET / » par défaut.
- `npm install express` installe Express 5 : beaucoup de tutos sont encore en v4.

**Choix** :
- `.gitignore` créé ici, en avance sur l'issue #3, qui le complétera.
- nodemon gardé comme prévu par l'issue. Node 24 propose `node --watch`, équivalent sans
  dépendance, en alternative possible.
- `npm audit` signale 6 alertes (ReDoS) dans des sous-dépendances de nodemon : outil de dev
  uniquement, `npm audit --omit=dev` ne trouve rien. Pas de `npm audit fix --force`
  (il rétrograderait nodemon). À revérifier quand nodemon sera mis à jour.