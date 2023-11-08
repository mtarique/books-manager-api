const express = require('express'); 
const router = express.Router();
const bookController = require('../controllers/bookController'); 

router.post('/add-book', bookController.addBook); 
router.get('/books', bookController.getBooks); 
router.get('/book/:id', bookController.getBookDetails); 
router.put('/book/:id', bookController.updateBook); 
router.delete('/book/:id', bookController.deleteBook); 

module.exports = router; 