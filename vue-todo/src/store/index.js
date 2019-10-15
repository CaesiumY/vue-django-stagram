import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: []
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
        }
    }
});
