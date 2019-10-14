import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const STORAGE_KEY = "todoList";

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
        asyncSetList({ commit }, STORAGE_KEY) {
            let lsList = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
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
