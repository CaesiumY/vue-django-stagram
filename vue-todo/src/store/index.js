import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
/* eslint-disable no-console */

Vue.use(Vuex);

const API = "http://127.0.0.1:8000/api/todos";

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
            // let lsList = JSON.parse(localStorage.getItem("todoList") || "[]");
            let lsList = axios
                .get(API)
                .then(response => {
                    console.log(response);
                    commit("setList", response.data);
                })
                .catch(error => {
                    console.log(error);
                });
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
