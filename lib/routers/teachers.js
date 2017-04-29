const router = require('express').Router();
const logger = require('winston');
const db = require('../db');

router.get('/', (req, res) => {
  db.execute(`SELECT * FROM teachers;`)
  	.then(rows => res.json(rows[0]))
  	.catch(error => logger.error(error));
})

module.exports = router;
