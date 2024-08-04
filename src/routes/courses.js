const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/update', courseController.update);
router.put('/:id', courseController.storeUpdate);
router.get('/:slug', courseController.show);

module.exports = router;
