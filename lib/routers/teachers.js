const router = require('express').Router();
const db = require('../db');

router.get('/', async (req, res) => {
	const [rows] = await db.execute(`SELECT * FROM teachers;`)
  res.json(rows);
})

module.exports = router;