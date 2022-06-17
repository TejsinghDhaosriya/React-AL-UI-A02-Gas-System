import ALHeader from "./ALHeader";
import { shallow } from "enzyme";

describe("Gas System", () => {

  const wrapper = shallow(
      <ALHeader name={"Actual"} value={"22"} percentage={20}/>
  );
  it("should render header", () => {
    expect(wrapper.text().includes("22")).toBe(true);
  });
  it("should render name", () => {
    expect(wrapper.text().includes("Actual")).toBe(true);
  });
  it("should render percentage", () => {
    expect(wrapper.text().includes("20")).toBe(true);
  });
});
