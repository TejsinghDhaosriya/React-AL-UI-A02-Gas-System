import GasHeader from "./GasHeader";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import ALHeader from "../../wrappers/ALHeader";

describe("Gas Header", () => {
  const mockStore = configureStore([]);
  const initialState = { gas: {} };
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <GasHeader />
    </Provider>
  );
  it("should render header", () => {
    expect(wrapper.text().includes("Gas Performance")).toBe(true);
  });
  it("should render al header wrapper component", () => {
    expect(
      wrapper.containsMatchingElement(
        <ALHeader name="Actual Cost" value={"$undefined"} />
      )
    ).toEqual(true);
    expect(
      wrapper.containsMatchingElement(
        <ALHeader name="Baseline Cost" value={"$undefined"} />
      )
    ).toEqual(true);
  });
});
