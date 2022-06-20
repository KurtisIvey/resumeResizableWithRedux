import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import Experience from "../Experience";
import { store } from "../../store/store";

const MockExperience = () => {
  return (
    <Provider store={store}>
      <Experience />
    </Provider>
  );
};

test("tests my mock to make sure I didn't screw that up too", () => {
  render(<MockExperience />);
  const sectionHeaderElement = screen.getByText(/Experience/i);
  expect(sectionHeaderElement).toBeInTheDocument();
});

describe("test input entries", () => {
  test("previous job input works", () => {
    render(<MockExperience />);
    const previousJobInputElement =
      screen.getByPlaceholderText(/Previous Job/i);
    fireEvent.change(previousJobInputElement, {
      target: { value: "previous job entry" },
    });
    expect(previousJobInputElement.value).toBe("previous job entry");
  });
  test("previousJobFrom input works", () => {
    render(<MockExperience />);
    const previousJobFromInputElement = screen.getByTestId("previousJobFrom");
    fireEvent.change(previousJobFromInputElement, {
      target: { value: "2022-01-21" },
    });
    expect(previousJobFromInputElement.value).toBe("2022-01-21");
  });
  test("previousJobTo input works", () => {
    render(<MockExperience />);
    const previousJobToInputElement = screen.getByTestId("previousJobTo");
    fireEvent.change(previousJobToInputElement, {
      target: { value: "2022-03-21" },
    });
    expect(previousJobToInputElement.value).toBe("2022-03-21");
  });
});
