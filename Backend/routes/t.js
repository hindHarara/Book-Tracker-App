const { Router } = require("express");
const { book } = require("../controllers");

const router = Router();
router.get("/bs", book.getBooks)
.get('/delete/:key', book.deleteBook)
.get('/search/:key',book.getBook)
module.exports = router;
