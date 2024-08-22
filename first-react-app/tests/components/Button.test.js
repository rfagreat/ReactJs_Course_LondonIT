// tests/components/Button.test.js
import React from "react";
import { shallow } from "enzyme";
import Button from "../../src/components/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button text="Click Me" />);
  });

  it("renders button with the correct text", () => {
    const wrapper = shallow(<Button children="Click Me" />);
    expect(wrapper.text()).toBe("Click Me");
  });

  it("applies custom styles", () => {
    const style = { backgroundColor: "red" };
    const wrapper = shallow(<Button text="Styled Button" style={style} />);
    expect(wrapper.prop("style")).toMatchObject(style);
  });

  it("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button text="Click Me" onClick={onClickMock} />);
    wrapper.simulate("click");
    expect(onClickMock).toHaveBeenCalled();
  });
});
