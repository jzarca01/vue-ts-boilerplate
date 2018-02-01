import { mount } from "vue-test-utils";
import { shallow } from "@vue/test-utils";
import HelloWithProps from "../src/components/HelloWithProps";

describe("HelloWithProps.spec.js", () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(HelloWithProps, {
            propsData: {
                message: "Hello World"
            }
        });
    });

    it("renders without crashing", () => {
        const wrapper = shallow(HelloWithProps);
        expect(wrapper.contains('div')).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

    it("should display Hello World", () => {
        expect(wrapper.vm.message).toEqual("Hello World");
    });
});