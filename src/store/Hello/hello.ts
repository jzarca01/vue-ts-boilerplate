import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { State as RootState } from "../state";
import { HelloState } from "./state";

type HelloContext = ActionContext<HelloState, RootState>;

export const hello = {
    namespaced: true,

    state: {
        message: "Initial text from VueX",
    },

    getters: {
        getState(state: HelloState): HelloState {
            return state;
        },
    },

    mutations: {
        setMessage(state: HelloState, newState: HelloState) {
            state.message = newState.message;
            return state.message;
        },
    },
    actions: {
    },
};

const { commit, read, dispatch } = getStoreAccessors<HelloState, RootState>("hello");

const getters = hello.getters;
export const readState = read(getters.getState);

const actions = hello.actions;
//export const dispatchSetMessage = dispatch(actions.setMessage);

const mutations = hello.mutations;
export const commitNewMessage = commit(mutations.setMessage);