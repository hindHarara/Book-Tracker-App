const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hindharara:hind1234@cluster0.uxpwzls.mongodb.net/BookTracker?retryWrites=true&w=majority')
const bookSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true,"Please enter a book title "]

        },
        author: {
            type: String,
            required: [true, "Please enter a book author name"]
        },
        version: {
            type: Number,
            required: false,
            default: 1
        },
        pages: {
            type: Number,
            required: [true, "Please enter a book class"],
            default: 0
        },
        class: {
            type: String,
            required: [true, "Please enter a book class"]
        },
        // {
        //     timestamps: true
    }
)

const Book = mongoose.model('Book', bookSchema);
module.exports = Book















// // Create a new MongoDB database
// // mongoose.connect('mongodb://localhost/book-tracker');
// const { dbConnection } = require("../configurations");
// //  const mongoose = require('mongoose')
// // const _uri ="mongodb+srv://hindharara:hind1234@cluster0.uxpwzls.mongodb.net/BookTracker?retryWrites=true&w=majority";

// //  const mongoose = require('mongoose')
// //  mongoose.connect("mongodb+srv://hindharara:hind1234@cluster0.uxpwzls.mongodb.net/BookTracker?retryWrites=true&w=majority")

// //  const bookSchema = 
// //      {
// //          title: {
// //              type: String,
// //              required: [true,"Please enter a book title "]

// //          },
// //          author: {
// //              type: String,
// //              required: [true, "Please enter a book author name"]
// //          },
// //          version: {
// //              type: Number,
// //              required: false,
// //              default: 1
// //          },
// //          pages: {
// //              type: Number,
// //              required: [true, "Please enter a book class"],
// //              default: 0
// //          },
// //          classes: {
// //              type: String,
// //              required: [true, "Please enter a book class"]
// //          },
//          // {
//          //     timestamps: true
//     //  }
// //  const book = mongoose.model('book', bookSchema);
// //  const book2 = new book({
// //   title: 'The Hitchhiker s Guide to the Galaxy',
// //   author: 'Douglas Adams',
// //   pages: 192,

// // });
// class Book{
//   constructor(data){
//     this.data= data;
//   }

//   add(){
//     return new Promise((resolve,reject) => {
//       dbConnection('books',async (collection)=>{
//         try{
//               await collection.insertOne(this.data)
//               resolve({
//                 status: true,
//                 message: "book added"
//               })
//         }catch(err){
//           reject({
//             status: false,
//             Message: err.message
//           });
//         }
//       })
//     })
//   }


// }
// module.exports = Book;

// // const data={
// //   title:"ff",
// //   pages:3,
// //   version:"f",
// //   classes:"j",
// //   author:"g",
// // }
// // const boook=new Book(data);
// // boook.add();
