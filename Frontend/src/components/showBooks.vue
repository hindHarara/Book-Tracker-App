<template>
  <div>
    <h2>Book List</h2>
    <ul>
      <li v-for="book in books" :key="book._id">
        {{ book.title }}
      </li>
    </ul>
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
        <tr v-for="book in books" :key="book._id">
          <td ></td>
          <td >{{ book.title }}</td>
          <td >{{ book.author }}</td>
          <td >{{ book.version }}</td>
          <td >{{ book.pages }}</td>
          
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BookList",
  data() {
    return {
      books: []
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      axios.get("http://localhost:5000/b/bs")
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
