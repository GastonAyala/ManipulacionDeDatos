const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const { addEditValidation } = require('../middleware/validations');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);


//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);
router.post('/movies/create', addEditValidation, moviesController.create);

router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', addEditValidation, moviesController.update);

router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/destroy/:id', moviesController.destroy);

module.exports = router;    