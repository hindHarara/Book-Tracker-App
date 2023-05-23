<template>
  <h1>Book Tracker</h1>
  <ul>
    <li v-for="(book,i) in books" :key="i">{{ book.title }}</li>
  </ul>
</template>


<script>
import axios from "axios";

export default {
  name: "updateBo",
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/b/bs").then((response) => {
      this.books = response.data;
    });
  },
};
</script>
