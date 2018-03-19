const express = require('express');
const router = express.Router();
const { findAll, create, update, remove } = require('../controllers/articles.controller');

/* GET users listing. */
router.get('/', findAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;