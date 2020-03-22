const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('User id', req.user.id)
    const queryText = `SELECT * FROM "builds" WHERE "user_id" = $1`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch(() => res.sendStatus(500));
})

router.post('/', (req, res) => {
    console.log('in post with:', req.body);
    const queryText = `INSERT INTO "builds" (title, description, image, user_id) VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [req.body.title, req.body.description, req.body.image, req.user.id])
    .then(() => res.sendStatus(201))
  .catch(() => res.sendStatus(500));
})

router.get('/:id', (req, res) => {
  console.log('id:', req.params.id)
  const queryText = `SELECT * FROM "builds" WHERE "id" = $1`;
  pool.query(queryText, [req.params.id])
  .then((result) => res.send(result.rows))
  .catch(() => res.sendStatus(500));
})

router.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM builds WHERE id = $1';
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing DELETE query', err);
      res.sendStatus(500);
    });
});

module.exports = router;