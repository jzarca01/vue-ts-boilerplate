import { mount, shallow } from "@vue/test-utils";
import mockAxios from "jest-mock-axios";

import Hello from "../src/components/Hello/";

describe("Hello.spec.js", () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(Hello);
    });

    afterEach(() => {
        // cleaning up the mess left behind the previous test
        mockAxios.reset();
    });

    it("renders without crashing", () => {
        const wrapper = shallow(Hello);
        expect(wrapper.contains('div')).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
    
    it("should fetch items for api call", () => {
        let catchFn = jest.fn(),
        thenFn = jest.fn();

    // simulating a server response
    mockAxios.mockResponse({ 
        data: [{
                userId: 1,
                id: 1,
                title: "Title1",
                body: "Body1"
            }] 
        });

    expect(mockAxios.get).toHaveBeenCalledWith('http://jsonplaceholder.typicode.com/posts');
    })
});