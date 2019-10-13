<template>
  <div id="app">
    <div class="container mt-3">
      <header>
        <h2>Todo List</h2>
        <span>{{list.length}}개의 할 일이 있습니다.</span>
      </header>
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

      <section>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(item, index) in list"
            :key="index"
          >
            <input
              class="item"
              type="text"
              readonly
              :value="item"
              ref="item"
              @dblclick="modifyItem(index)"
              @keyup.enter="modifyItem(index)"
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
                <button class="dropdown-item" ref="modifyBtn" @click="modifyItem(index)">수정</button>
                <button class="dropdown-item" @click="removeItem(index)">삭제</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
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
  components: {}
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
