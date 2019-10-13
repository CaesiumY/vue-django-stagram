<template>
  <div id="app">
    <div class="container mt-3">
      <Header></Header>
      <Input></Input>
      <List></List>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import InputBar from "./components/inputBar";
import List from "./components/list";

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
        item.classList.remove("form-control");
        modifyBtn.innerText = "수정";
        this.list.splice(index, 1, item.value);
        this.beforeModify = null;
      } else {
        let item = this.$refs["item"][index];
        let modifyBtn = this.$refs["modifyBtn"][index];
        item.removeAttribute("readonly", "readonly");
        item.classList.add("form-control");
        modifyBtn.innerText = "완료";
        this.nowModify = index;
        this.beforeModify = index;
      }
    }
  },
  components: {
    Header,
    InputBar,
    List
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
