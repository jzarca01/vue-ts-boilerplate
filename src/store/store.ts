import Vue from 'vue';
import * as Vuex from "vuex";
import { hello } from "./Hello";
import { State } from "./state";

Vue.use(Vuex);

const createStore = () => new Vuex.Store<State>({
    modules: {
        hello,
    },
});

export const store = createStore();