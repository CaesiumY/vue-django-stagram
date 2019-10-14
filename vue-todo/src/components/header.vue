<template>
  <header>
    <h2>Todo List</h2>
    <span>{{listSize}}개의 할 일이 있습니다.</span>
  </header>
</template>

<script>
export default {
  computed: {
    listSize() {
      return this.$store.state.list.length;
    }
  }
};
</script>

<style scoped>
</style>