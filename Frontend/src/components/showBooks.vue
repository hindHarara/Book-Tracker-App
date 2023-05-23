<template>
    <div>
      <!-- <button @click="showBooks()"><h1>Books</h1></button> -->
  <ul>
    <li v-for="(book, i) in books" :key="i">{{ book.title }}</li>
  </ul>


<!-- 
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, i) in books" :key="i">
          <td ></td>
          <td >{{ book.title }}</td>
          <td >{{ book.author }}</td>
          <td >{{ book.version }}</td>
          <td >{{ book.pages }}</td>
          
        </tr>
      </tbody>
    </table> -->
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "showBooks",
  data(){
    return {
      books: []
    }
  },
  methods: {
//     async showBooks() {
//        await axios.get('http://localhost:5000/b/bs').then(books => {
// this.books = books;
//       })

//     }
  },
mounted:{
  showBooks() {
  axios.get('http://localhost:5000/b/bs').then(response => {
    console.log(response.data)
      // this.books = response.data;
    });
}
},
}




</script>
