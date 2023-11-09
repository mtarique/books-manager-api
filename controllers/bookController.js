const Book = require('../models/Book')

// Add a new book 
exports.addBook = async (req, res) => {
    if(!req.body.title || req.body.title == '' || req.body.title == undefined) {
        return res.status(400).json({message: "Book title is required"})
    }

    if(!req.body.author || req.body.author == '' || req.body.author == undefined) {
        return res.status(400).json({message: "Book author is required"})
    }

    if(!req.body.summary || req.body.summary == '' || req.body.summary == undefined) {
        return res.status(400).json({message: "Book summary is required"})
    }

    const book = new Book({
        title: req.body.title, 
        author: req.body.author, 
        summary: req.body.summary
    })

    book.save().then(result  => {
        res.status(201).json({message: "New book successfully added"})
    }).catch(error => {
        res.status(500).json({message: error.message})
    })
}

// Get list of books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find(); 

        if(books.length) {
            res.status(200).json({data: books})
        } else {
            res.status(404).json({message: "No books found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get book details by id 
exports.getBookDetails = async (req, res) => {
    const bookId = req.params.id; 
    if(!bookId || bookId == '' || bookId == undefined) {
        return res.status(400).json({message: "Missing or invalid book id"})
    }
        
    try {
        const book = await Book.findById(bookId); 
        if(book) {
            res.status(200).json({data: book})
        } else {
            res.status(404).json({message: "Book not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Update a book by it's id
exports.updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
    
        const bookUpdate = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
    
        if (!bookUpdate) {
          return res.status(404).json({ message: 'Book not found' });
        }
    
        res.status(200).json({ message: 'Book updated', data: bookUpdate });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// Delete book by id
exports.deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
    
        const book = await Book.findById(bookId);
    
        if(!book) {
          return res.status(404).json({ message: 'Book not found' });
        }
        
        await Book.findByIdAndDelete(bookId)
        res.status(200).json({ message: 'Successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}