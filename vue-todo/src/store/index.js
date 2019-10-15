import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: [],
        modifyItem: "",
        preItem: null,
        nowItem: null
    },
    getters: {
        getList(state) {
            return state.list;
        }
    },
    actions: {
        asyncSetList({ commit }) {
            let lsList = JSON.parse(localStorage.getItem("todoList") || "[]");
            commit("setList", lsList);
        }
    },
    mutations: {
        setList(state, payload) {
            state.list = payload;
        },
        pushList(state, payload) {
            state.list.push(payload);
        },
        removeList(state, payload) {
            state.list.splice(payload, 1);
        },
        modifyList(state, payload) {
            if (state.preItem === payload.index) {
                payload.item.setAttribute("readonly", "readonly");
                payload.modifyBtn.innerText = "수정";
                payload.item.classList.add("no-outline");
                state.list.splice(payload.index, 1, payload.item.value);
                state.preItem = null;
            } else {
                payload.item.removeAttribute("readonly");
                payload.item.classList.remove("no-outline");
                payload.item.focus();
                payload.modifyBtn.innerText = "완료";
                state.preItem = payload.index;
                state.nowItem = payload.index;
            }
        }
    }
});
