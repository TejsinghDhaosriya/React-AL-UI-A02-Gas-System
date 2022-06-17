import GasSystem from ".";
import { mount } from "enzyme";

import configureStore from "../app/store";
import { Provider } from "react-redux";

describe("Gas System", () => {
  const store = configureStore();

  const wrapper = mount(
    <Provider store={store}>
      <GasSystem />
    </Provider>
  );
  it("should render header", () => {
    expect(wrapper.text().includes("Gas System")).toBe(true);
  });
});
