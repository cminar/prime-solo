const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('User id', req.user.id)
    const queryText = `SELECT * FROM "builds" WHERE "user_id" = $1`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch(() => res.sendStatus(502));
})

router.post('/', (req, res) => {
    console.log('in post with:', req.body);
    const queryText = `INSERT INTO "builds" (title, description, image, user_id) VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [req.body.title, req.body.description, req.body.image, req.user.id])
    .then(() => res.sendStatus(201))
  .catch(() => res.sendStatus(500));
})

router.get('/api/:id', (req, res) => {
  console.log('id:', req.params.id)
  const queryText = `SELECT * FROM "builds" 
  JOIN "cpu" ON "builds"."cpu_id" = "cpu"."id"
  JOIN "gpu" ON "builds"."gpu_id" = "gpu"."id"
  JOIN "psu" ON "builds"."psu_id" = "psu"."id"
  JOIN "mobo" ON "builds"."mobo_id" = "mobo"."id"
  JOIN "ram" ON "builds"."ram_id" = "ram"."id"
  WHERE "builds"."id" = $1;`
  pool.query(queryText, [req.params.id])
  .then((result) => res.send(result.rows))
  .catch(() => res.sendStatus(502));
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

router.get('/cpu', (req, res) => {
  console.log('User id', req.user.id)
  const queryText = 'SELECT * FROM "cpu"';
  pool.query(queryText)
  .then((result) => res.send(result.rows))
  .catch((error) => {
    console.log(`Error on query ${error}`);
    res.send(error)
});
})
router.get('/gpu', (req, res) => {
  console.log('User id', req.user.id)
  const queryText = `SELECT * FROM "gpu"`;
  pool.query(queryText)
  .then((result) => res.send(result.rows))
  .catch((error) => {
    console.log(`Error on query ${error}`);
    res.send(error)
});
})
router.get('/psu', (req, res) => {
  console.log('User id', req.user.id)
  const queryText = `SELECT * FROM "psu"`;
  pool.query(queryText)
  .then((result) => res.send(result.rows))
  .catch((error) => {
    console.log(`Error on query ${error}`);
    res.send(error)
});
})
router.get('/ram', (req, res) => {
  console.log('User id', req.user.id)
  const queryText = `SELECT * FROM "ram"`;
  pool.query(queryText)
  .then((result) => res.send(result.rows))
  .catch((error) => {
    console.log(`Error on query ${error}`);
    res.send(error)
});
})
router.get('/mobo', (req, res) => {
  console.log('User id', req.user.id)
  const queryText = `SELECT * FROM "mobo"`;
  pool.query(queryText)
  .then((result) => res.send(result.rows))
  .catch((error) => {
    console.log(`Error on query ${error}`);
    res.send(error)
});
})

module.exports = router;