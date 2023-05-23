const express = require('express');
const {Book} = require('../models');


  const getBooks = (req, res, next) => {
    const book= Book.find();
    book.then(books => {
      res.json(books);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    });
    // const books = Book.find();
    // books.then(books => {
    //   res.json(books);
    // });
  }

  const getBook = (req, res, next) => {

    const key = req.params.key;

    // Perform the search based on the provided key
    const book = Book.find({ classes: key }); // Searching by title (modify as needed)
      book.then(results => {
        res.json(results);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      });
    // const key = req.params.key;
    // const book = Book.find({ classes: key });
    // book.then(book => {
    //   res.json(book);
    // });
  }

  const createBook = (req, res, next) => {
    const book = new Book(req.body);
    book.save().then(book => {
      resres.status(201).json(book);
    });
  }

const updateBook = (req, res, next) => {
    const id = req.params.id;
    const book = Book.findOneAndUpdate(id, req.body);
    book.then(book => {
      res.json(book);
    });
  }

const deleteBook = (req, res, next) => {
    const key = req.params.key;
    console.log(key)
    const book = Book.findOneAndDelete({ classes: key })
    .then(deletedBook => {
      if (deletedBook) {
        console.log('Book deleted successfully:', deletedBook);
      } else {
        console.log('Book not found');
      }
    })
    .catch(error => {
      console.error('Error deleting book:', error);
    });
  }



module.exports = {
  createBook, deleteBook, updateBook, getBooks,
  getBook
};



















// const { dbConnection } = require("../configurations");
// const { Book } = require("../models");

// const addBook=(req, res, next) => {
  
  // const bookData =req.body;
  // const book= new Book(bookData);
  // book.add().then(
  //     res.status(201).json({
  //       status: true,
  //       message: "Book has been added successfully",
  //     })
  //   ).catch(
  //     next(createError(500, err.message))
  //   );
// }
// module.exports = {
//   addBook}
