<template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Search..." />
    <button @click="search">Search</button>

    <div v-if="searchResults.length > 0">
      <h2>Search Results:</h2>
      <ul>
        <li v-for="result in searchResults" :key="result.title">{{ result.title }}</li>
      </ul>
    </div>

    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "searchBook",
  data() {
    return {
      searchQuery: "",
      searchResults: []
    };
  },
  methods: {
    search() {
      axios.get(`http://localhost:5000/b/search/${this.searchQuery}`)
        .then(response => {
          this.searchResults = response.data;
          console.log(this.searchResults);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
