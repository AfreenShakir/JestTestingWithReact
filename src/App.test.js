import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it('checks if App title is "Hello, World!"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toBe("Hello, World!");
  });
});
