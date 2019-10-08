<template>
  <div id="app">
    <header>Todo List</header>
    <section class="input">
      <input type="text" name id="todoInput" v-model="value" @keyup.enter="addItem" />
      <input type="button" @click="addItem" value="제출" />
    </section>
    <section>
      <ol>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      value: "",
      list: []
    };
  },
  methods: {
    addItem() {
      this.list.push(this.value);
      this.value = "";
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
