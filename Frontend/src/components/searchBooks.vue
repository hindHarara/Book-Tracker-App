<template>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"> -->
<div id="gradient">
<h2 id="head">Search Book </h2>
<p id="pargh">You can search by Book name or Book author</p>
<form class="searchbox" >
        <input type="search" v-model="search" placeholder="Search"  style="color: #ce0000;" />
        <button type="submit" @click="searchB()" value="search">&nbsp;</button>
    </form>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "searchBooks",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    async searchB() {
     const result = await axios.get("http://localhost:5000/b/search ", {
        params: {
    key: this.search,
  },
      })
      // console.log(result);
      if (result.status == 201) {
      console.log(result.data)
        // alert('Done !!');
        // this.$router.push({ name: "showBooks" });
      // }
      // console.log("signing in **");
    }
  },
}};
</script>
<style scoped>
@import url('../assets/css/search.css');

</style>