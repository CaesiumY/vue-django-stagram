<template>
  <div class="input-group mb-3 mt-3">
    <input
      class="form-control"
      type="text"
      id="todoInput"
      v-model="value"
      @keyup.enter="addItem"
      placeholder="할 일을 입력하세요"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="addItem">제출</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    addItem() {
      if (this.value) {
        this.$store.commit("pushList", this.value);
        this.value = "";
      }
    }
  }
};
</script>

<style scoped>
</style>