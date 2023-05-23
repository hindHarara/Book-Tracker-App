const { Router } = require("express");
const { bookController } = require("../controllers");


const router = Router();

router
  .get("/books", bookController.getBooks)
  // .get("/pages", bookController.getBooksPageCount);
  router.get('/search',bookController.searchBook)
  router.get('/update/:key',bookController.updateBook)
  router.get('/delete/:key',bookController.deleteBook)
module.exports = router;
