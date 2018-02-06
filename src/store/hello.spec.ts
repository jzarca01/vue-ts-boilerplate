import "@vue/test-utils";
import * as Vuex from "vuex";
import { store, State } from "./";
import * as hello from "./hello";

import Vue from "vue";

const mockItems = [
    {
        userId: 1,
        id: 1,
        title: "Test title",
        body: "Test body"
    }
];

describe("Given store with modules exposing mutations", () => {
    beforeEach(() => {
        store.replaceState({
            hello: {
                message: "Initial text from VueX",
                items: [],
                toggleRead: false,
            },
        });
    });

    describe("testing the getters", () => {

        it("mutates state of the module and not state of other modules", () => {
            expect(store.state).toEqual({
                hello: {
                    message: "Initial text from VueX",
                    items: [],
                    toggleRead: false,
                },
            });
        });
    });

    describe("testing the mutations", () => {
        beforeEach(() => {
            hello.commitNewItems(store, { items: mockItems});
        });

        it("should have one item", () => {
            expect(store.state).toEqual({
                hello: {
                    message: "Initial text from VueX",
                    items: mockItems,
                    toggleRead: false,
                },
            });
        })

        it("should mutate the message", () => {
            hello.commitNewMessage(store, { message: "Test message" });
            expect(store.state).toEqual({
                hello: {
                    message: "Test message",
                    items: mockItems,
                    toggleRead: false,
                },
            });
        });

        it("should mutate the toggleRead", () => {
            hello.toggleReadView(store);
            expect(store.state).toEqual({
                hello: {
                    message: "Initial text from VueX",
                    items: mockItems,
                    toggleRead: true,
                },
            });
        });

        it("should remove the item", () => {
            const itemToDelete = mockItems[0];
            hello.deleteItem(store, itemToDelete);
            expect(store.state).toEqual({
                hello: {
                    message: "Initial text from VueX",
                    items: [],
                    toggleRead: false,
                },
            });
        });
    });
});