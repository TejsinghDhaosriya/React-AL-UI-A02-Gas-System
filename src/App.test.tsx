import React from "react";

import App from "./App";

import {shallow } from "enzyme";
import GasSystem from "./modules";

describe("App", () => {
  it("App to be render", () => {
    const app = shallow(<App />);
    expect(app).toBeTruthy();
  });
  it("should render gas system ", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<GasSystem />)).toBeTruthy();
  });
});
