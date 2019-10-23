<template>
  <section>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(item, index) in list"
        :key="index"
      >
        <input
          class="item no-outline"
          type="text"
          readonly
          :value="item.body"
          ref="item"
          @dblclick="modifyItem(item, index)"
          @keyup.enter="modifyItem(item, index)"
        />
        <div class>
          <button
            class="btn btn-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            더보기
            <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <button class="dropdown-item" ref="modifyBtn" @click="modifyItem(item, index)">수정</button>
            <button class="dropdown-item" @click="removeItem(item.id)">삭제</button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // item: this.$refs["item"][index],
      // modifyBtn: this.$refs["modifyBtn"][index]
      itemValue: ""
    };
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch("asyncPopList", index);
    },
    modifyItem(myItem, index) {
      let obj = { body: myItem.body };
      this.$store.dispatch("asyncPutList", {
        myItem,
        obj,
        index,
        item: this.$refs["item"][index],
        modifyBtn: this.$refs["modifyBtn"][index]
      });
    }
  }
};
</script>

<style scoped>
</style>