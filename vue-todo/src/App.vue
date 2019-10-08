<template>
  <div id="app">
    <header>Todo List</header>
    <section class="input">
      <input type="text" name id />
      <input type="button" value="제출" />
    </section>
    <section>
      <ol>
        <li>리스트</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
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
