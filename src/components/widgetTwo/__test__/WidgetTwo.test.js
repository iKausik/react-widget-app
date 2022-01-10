import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import WidgetTwo from "../WidgetTwo";

//
//
test("initial status text should be 'Low'", () => {
  render(<WidgetTwo />);

  const statusElement = screen.getByTestId("status");
  const bar1Element = screen.getByTestId("bar1");

  expect(statusElement.textContent).toBe("Low");
  expect(bar1Element.className).toBe("inActiveColor bar bar1");
});

//
//
test("initially the first 3 (from the top) bars should be inActive and the last two bars should be Active", () => {
  render(<WidgetTwo />);

  const bar1Element = screen.getByTestId("bar1");
  const bar2Element = screen.getByTestId("bar2");
  const bar3Element = screen.getByTestId("bar3");
  const bar4Element = screen.getByTestId("bar4");
  const bar5Element = screen.getByTestId("bar5");

  expect(bar1Element.className).toBe("inActiveColor bar bar1");
  expect(bar2Element.className).toBe("inActiveColor bar bar2");
  expect(bar3Element.className).toBe("inActiveColor bar bar3");
  expect(bar4Element.className).toBe("activeColor bar bar4");
  expect(bar5Element.className).toBe("activeColor bar bar5");
});

//
//
test("if a bar is inActive, selecting it should make all the below bars active including the bar itself and all the above bars inActive", () => {
  render(<WidgetTwo />);

  const bar1Element = screen.getByTestId("bar1");
  const bar2Element = screen.getByTestId("bar2");
  const bar3Element = screen.getByTestId("bar3");
  const bar4Element = screen.getByTestId("bar4");
  const bar5Element = screen.getByTestId("bar5");

  expect(bar1Element.className).toBe("inActiveColor bar bar1");
  expect(bar2Element.className).toBe("inActiveColor bar bar2");
  expect(bar3Element.className).toBe("inActiveColor bar bar3");
  expect(bar4Element.className).toBe("activeColor bar bar4");
  expect(bar5Element.className).toBe("activeColor bar bar5");

  fireEvent.click(bar2Element);

  expect(bar1Element.className).toBe("inActiveColor bar bar1");
  expect(bar2Element.className).toBe("activeColor bar bar2");
  expect(bar3Element.className).toBe("activeColor bar bar3");
  expect(bar4Element.className).toBe("activeColor bar bar4");
  expect(bar5Element.className).toBe("activeColor bar bar5");

  fireEvent.click(bar4Element);

  expect(bar1Element.className).toBe("inActiveColor bar bar1");
  expect(bar2Element.className).toBe("inActiveColor bar bar2");
  expect(bar3Element.className).toBe("inActiveColor bar bar3");
  expect(bar4Element.className).toBe("activeColor bar bar4");
  expect(bar5Element.className).toBe("activeColor bar bar5");
});

//
//
test("if any of the top two bars are active, status will be 'High'", () => {
  render(<WidgetTwo />);

  const statusElement = screen.getByTestId("status");
  const bar1Element = screen.getByTestId("bar1");
  const bar2Element = screen.getByTestId("bar2");

  expect(statusElement.textContent).toBe("Low");
  expect(bar1Element.className).toBe("inActiveColor bar bar1");
  expect(bar2Element.className).toBe("inActiveColor bar bar2");

  fireEvent.click(bar1Element);

  expect(statusElement.textContent).toBe("High");

  fireEvent.click(bar2Element);

  expect(statusElement.textContent).toBe("High");
});

//
//
test("if the middle bar is active, status will be 'Medium'", () => {
  render(<WidgetTwo />);

  const statusElement = screen.getByTestId("status");
  const bar3Element = screen.getByTestId("bar3");

  expect(statusElement.textContent).toBe("Low");
  expect(bar3Element.className).toBe("inActiveColor bar bar3");

  fireEvent.click(bar3Element);

  expect(statusElement.textContent).toBe("Medium");
});

//
//
test("if any of the lowest two bars are active, status will be 'Low'", () => {
  render(<WidgetTwo />);

  const statusElement = screen.getByTestId("status");
  const bar5Element = screen.getByTestId("bar4");
  const bar4Element = screen.getByTestId("bar4");

  fireEvent.click(bar4Element);

  expect(statusElement.textContent).toBe("Low");

  fireEvent.click(bar5Element);

  expect(statusElement.textContent).toBe("Low");
});
