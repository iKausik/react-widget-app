import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import WidgetOne from "../WidgetOne";

//
//
test("initial value should be 5", () => {
  render(<WidgetOne />);

  const sliderInputElement = screen.getByLabelText("custom-slider");
  const numberElement = screen.getByTestId("number");

  expect(sliderInputElement.value).toBe("5");
  expect(numberElement.textContent).toBe("5");
});

//
//
test("number in the middle should change when value in the slider change", () => {
  render(<WidgetOne />);

  const sliderInputElement = screen.getByLabelText("custom-slider");
  const numberElement = screen.getByTestId("number");

  expect(sliderInputElement.value).toBe("5");

  fireEvent.change(sliderInputElement, {
    target: {
      value: 8,
    },
  });

  expect(numberElement.textContent).toBe("8");
});
