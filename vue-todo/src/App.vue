<template>
  <div id="app">
    <header>Todo List</header>
    <section class="input">
      <input type="text" name id="todoInput" v-model="value" @keyup.enter="addItem" />
      <input type="button" @click="addItem" value="제출" />
    </section>
    <section>
      <ol>
        <li v-for="(item, index) in list" :key="index">
          {{item}} 은 {{index + 1}}번째
          <button @click="removeItem(index)">삭제</button>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
const STORAGE_KEY = "todoList";

var storage = {
  fetch: function() {
    var todos = localStorage.getItem(STORAGE_KEY) || "[]";
    todos = JSON.parse(todos);
    return todos;
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

export default {
  name: "app",
  data() {
    return {
      value: "",
      list: storage.fetch()
    };
  },
  watch: {
    list: {
      handler: function(todos) {
        storage.save(todos);
      },
      deep: true
    }
  },
  methods: {
    addItem() {
      this.list.push(this.value);
      this.value = "";
    },
    removeItem(index) {
      this.list.splice(index, 1);
    }
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
