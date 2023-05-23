const { MongoClient } = require("mongodb");

// const _uri ="mongodb://localhost:27017"
const _uri ="mongodb+srv://hindharara:hind1234@cluster0.uxpwzls.mongodb.net/BookTracker?retryWrites=true&w=majority";

const dbConnection = (collection, cb) => {
  MongoClient.connect(_uri)
    .then(async (client) => {
      const db = client.db("BookTracker").collection(collection);
      await cb(db);
      client.close();
    })
    .catch();
};

module.exports = dbConnection;
//فحص انه الاتصال ب database ناجح بنشغل هادا الملف وبنشوف اذا هيجلب البيانات اولا لا
// dbConnection('users',async(db) => {
// const user = await db.findOne();
// console.log(user)
// })
