import { ActionContext, Store, Payload } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { State as RootState } from "../state";
import { Item, HelloState } from "./state";

type HelloContext = ActionContext<HelloState, RootState>;

export const hello = {
    namespaced: true,

    state: {
        message: "Initial text from VueX",
        items: [],
        toggleRead: false,
    },

    getters: {
        getState(state: HelloState): HelloState {
            return state;
        },
    },

    mutations: {
        setMessage(state: HelloState, payload: {message: string} ): HelloState {
            state.message = payload.message;

            console.log(state);
            return state;
        },

        setItems(state: HelloState, payload: {items: Item[]} ): HelloState {
            state.items = payload.items;

            console.log(state);
            return state;
        },
        deleteItem(state: HelloState, item: Item) {
            console.log(item);
            state.items = state.items.filter(e => e != item);

            console.log(state);
            return state;
        },

        toggleReadView(state: HelloState): HelloState {
            state.toggleRead = !state.toggleRead;

            console.log(state);
            return state;
        }
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

export const commitNewItems = commit(mutations.setItems);
export const deleteItem = commit(mutations.deleteItem);

export const toggleReadView = commit(mutations.toggleReadView);