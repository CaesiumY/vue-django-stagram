<template>
  <div id="app">
    <div class="container mt-3">
      <Header></Header>
      <InputBar></InputBar>
      <List></List>
    </div>
  </div>
</template>


<script>
import Header from "./components/header";
import InputBar from "./components/inputBar";
import List from "./components/list";


export default {
  name: "app",
  components: {
    Header,
    InputBar,
    List
  },
  created() {
    this.$store.dispatch("asyncSetList");
  }
};
</script>

<style>
input {
  border: none;
  font-size: 1.2rem;
}
.item {
  flex-grow: 1;
}

.no-outline:focus {
  outline: none;
}
</style>
