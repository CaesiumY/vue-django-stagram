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
          <input class="item" type="text" readonly :value="item" ref="item" />
          <button ref="modifyBtn" @click="modifyItem(index)">수정</button>
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
      list: storage.fetch(),
      valueModify: "",
      beforeModify: null,
      nowModify: null
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
    },
    modifyItem(index) {
      // let pre = this.beforeModify;
      // if (pre != null) {
      //   let item = this.$refs["item"][pre];
      //   let modifyBtn = this.$refs["modifyBtn"][pre];
      //   item.setAttribute("readonly", "readonly");
      //   modifyBtn.innerText = "수정";
      // }

      if (this.beforeModify === index) {
        let item = this.$refs["item"][index];
        let modifyBtn = this.$refs["modifyBtn"][index];
        item.setAttribute("readonly", "readonly");
        modifyBtn.innerText = "수정";
        this.list.splice(index, 1, item.value);
        this.beforeModify = null;
      } else {
        let item = this.$refs["item"][index];
        let modifyBtn = this.$refs["modifyBtn"][index];
        item.removeAttribute("readonly", "readonly");
        modifyBtn.innerText = "완료";
        this.nowModify = index;
        this.beforeModify = index;
      }
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
