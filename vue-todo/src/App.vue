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

const STORAGE_KEY = "todoList";

export default {
  name: "app",
  components: {
    Header,
    InputBar,
    List
  },
  created() {
    this.$store.dispatch("asyncSetList");
  },
  mounted() {
    this.$store.watch(
      () => this.$store.getters.getList,
      todos => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    );
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

.item:focus {
  outline: none;
}
</style>
