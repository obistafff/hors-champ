import express from 'express';

const app = express();

// Middleware : transforme le corps JSON des requêtes en objet (req.body)
app.use(express.json());

// Route de santé : permet de vérifier que le serveur répond
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
