// const { dbConnection } = require("../configurations");

// const getBooks = (req, res, next) => {
  // const pageNum = parseInt(req.query.page);
  // if (isNaN(pageNum)) {
  //   res.status(400).json({
  //     status: false,
  //     message: "Number of page is required",
  //   });
  // }
  // const limit = 10;
  // const skip = (pageNum - 1) * limit;

//   dbConnection("books", async (collection) => {
//     const books = await collection.find({}).toArray();//.skip(skip).limit(limit)
//     res.json(books);
//   });
// };

// const getBooksPageCount = (req, res, next) => {
//   dbConnection("books", async (collection) => {
//     const count = await collection.count({});
//     const limit = 10;
//     res.json({
//       pages: Math.ceil(count / limit),
//     });
//   });
// };




const { dbConnection } = require('../configurations')

const getBooks = (req, res) => {
//     const pageNum = parseInt(req.query.page);
//     if (isNaN(pageNum)) {
//         res.status(400).json({
//             status: false,
//             message: "Number of page is required"
//         })
//     }
// const limit = 10;
//    const skip = (pageNum - 1) * limit;

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).toArray();
        console.log(books.length);
        // .skip(skip).limit(limit).toArray();
        res.json(books);
    })
}

// const getBooksPageCount = (req, res) => {
//     dbConnection('books', async (collection) => {
//     const count = await collection.count({});
//     const limit = 10;
//     res.json({
//     pages: Math.ceil(count/limit)
//     })
//     })
// }
const searchBook = (req,res) =>{
    dbConnection('books', async (collection) => { 
        const key = req.params.key;
        const query = {
            '$or' :[
                {title: key} 
                , {auther:  key}
                        
                    ] // Case-insensitive search using regex
            // '$or' :[
            //     {title: { $regex: key}} 
            //     , {auther: { $regex: key}}
                        
            //         ] // Case-insensitive search using regex
         };
      
          // Execute the query
          const results = await collection.findOne(query)
      res.status(200).json(results);
    })
}
const updateBook =(req,res) =>{
    dbConnection('books', async (collection) =>{
      const  oldBook = {author :req.params.key}
      console.log(oldBook);
      console.log(req.query.title);
    //    const newBook = { $set: { author: req.query.author,
    //          name: req.query.name,
    //          title: req.query.title ,
    //         class: req.query.class} }

        await collection.updateOne(
        { author: req.params.key },
        { $set: { title: req.query.title, author: req.query.author } },
        (err, result) => {
          if (err) {
            console.error('Error updating document:', err);
            res.status(500).send('Error updating document');
            return;
          }
          console.log('Document updated successfully');
          res.send('Document updated successfully' , result);
        }
      );

//     const existingBook = await db.collection('books').findOne({ author :req.params.key });
// console.log(req.params.key);
//   // Update the book in the database
//   existingBook.title = req.query.title;
//   existingBook.author = req.query.author;
//   // existingBook.genre = book.genre;
//   existingBook.rating = req.query.rating;
//   await existingBook.save();

//   // Notify the user that the book has been updated
//   console.log('Book has been updated');

    });

    
    res.send("<h1>Document updated successfully</h1>");
console.log('================================');
};


const deleteBook = (req, res) => { 
        const bookId = req.params.key; // Access the bookId parameter from the path
        dbConnection('books',async (collection) =>{

        collection.deleteOne({ _id: bookId }, (err, result) => {
            if (err) {
              console.error('Error deleting document:', err);
              res.status(500).send('Error deleting document');
              return;
            }
            console.log('Document deleted successfully',result);
            res.send('Document deleted successfully');
          });
        } )  
    }

// const searchBook = (req, res) => {
//     dbConnection('books', async (collection) => {
//         const key = req.params.key;
//         console.log(key);

//     const book = await collection.find({
//         '$or' :[{
//             auther : {$regex :book.auther ===  key}
//         },{
//             title : {$regex :book.title ===  key}
//         }
//     ]
//     });
//     console.log(book);
//     res.json(book);
//     // res.send("<h1>{key}</h1>");
//     // })
    // })
// }

module.exports = {
getBooks,searchBook,updateBook,deleteBook
}













// module.exports = {
  // getBooks
  //, getBooksPageCount,
// };
