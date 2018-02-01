import { mount } from "vue-test-utils";
import Hello from "../src/components/Hello";

describe("Hello.spec.js", () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(Hello);
    });
    it("should display the content of .hello h1 = Now that is a cool Vue.JS with Typescript 2.7 boilerplate", () => {
        const msg = `Now that is a cool Vue.JS with Typescript 2.7 boilerplate `;
        expect(wrapper.vm.$el.querySelector('.hello h1').textContent).toBe(msg);
    });
});