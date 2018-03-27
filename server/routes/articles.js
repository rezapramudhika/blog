const express = require('express');
const router = express.Router();
const { findAll, findById, create, update, remove } = require('../controllers/articles.controller');

/* GET users listing. */
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;