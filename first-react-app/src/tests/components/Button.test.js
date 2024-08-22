// src/components/Button.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../components/Button";

/**
 * Test suite for the Button component
 */
describe("Button", () => {
  /**
   * Test that the Button component renders with the correct text
   *
   * @example
   * render(<Button children="Click me" />);
   * // Button element with text "Click me" should be in the document
   */
  test("renders with the correct text", () => {
    render(<Button children="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  /**
   * Test that the Button component has the correct CSS class
   *
   * @example
   * render(<Button children="Click me" />);
   * // Button element should have class "button"
   */
  test("has the correct CSS class", () => {
    render(<Button children="Click me" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("button");
  });

  /**
   * Test that the Button component calls the onClick prop when clicked
   *
   * @example
   * const onClickMock = jest.fn();
   * render(<Button children="Click me" onClick={onClickMock} />);
   * fireEvent.click(screen.getByText("Click me"));
   * // onClickMock should be called once
   */
  test("calls onClick prop when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button children="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  /**
   * Test that the Button component does not throw an error when clicked without onClick prop
   *
   * @example
   * render(<Button children="Click me" />);
   * fireEvent.click(screen.getByText("Click me"));
   * // No error should be thrown
   */
  test("does not throw an error when clicked without onClick prop", () => {
    render(<Button children="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(() => fireEvent.click(buttonElement)).not.toThrow();
  });
});
