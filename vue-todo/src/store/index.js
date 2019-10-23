import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
/* eslint-disable no-console */

Vue.use(Vuex);

const API = "http://127.0.0.1:8000/api/";

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
            axios
                .get(API + "todos/")
                .then(response => {
                    console.log("axios_get:", response);
                    commit("setList", response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        asyncPushList({ dispatch }, payload) {
            axios
                .post(API + "todos/", payload)
                .then(response => {
                    console.log(response);
                    dispatch("asyncSetList");
                })
                .catch(error => console.log(error));
        },
        asyncPopList({ dispatch }, payload) {
            axios
                .delete(`${API}todos/${payload}/`)
                .then(response => {
                    console.log(response);
                    dispatch("asyncSetList");
                })
                .catch(error => console.log(error));
        },
        asyncPutList({ state, dispatch }, payload) {
            if (state.preItem === payload.index) {
                payload.obj.body = payload.item.value;
                payload.item.setAttribute("readonly", "readonly");
                payload.modifyBtn.innerText = "수정";
                payload.item.classList.add("no-outline");
                state.preItem = null;
            } else {
                payload.item.removeAttribute("readonly");
                payload.item.classList.remove("no-outline");
                payload.item.focus();
                payload.modifyBtn.innerText = "완료";
                state.preItem = payload.index;
                state.nowItem = payload.index;
            }
            console.log("payload:", payload);
            axios
                .put(`${API}todos/${payload.myItem.id}/`, payload.obj)
                .then(response => {
                    console.log("axios_put:", response);
                    dispatch("asyncSetList");
                })
                .catch(error => console.log(error));
        }
    },
    mutations: {
        setList(state, payload) {
            state.list = payload;
        }
    }
});
