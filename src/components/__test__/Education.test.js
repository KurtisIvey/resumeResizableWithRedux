import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Education from "../Education";
import { store } from "../../store/store";

const MockEducation = () => {
  return (
    <Provider store={store}>
      <Education />
    </Provider>
  );
};

test("tests my mock to make sure I didn't screw that up too", () => {
  render(<MockEducation />);
  const sectionHeaderElement = screen.getByText(/Education/i);
  expect(sectionHeaderElement).toBeInTheDocument();
});

describe("Input entries", () => {
  test("university input entry can be typed into", () => {
    render(<MockEducation />);
    const inputElement = screen.getByPlaceholderText(/University/i);
    fireEvent.change(inputElement, { target: { value: "University" } });
    expect(inputElement.value).toBe("University");
  });
  test("degree level input entry can be typed into", () => {
    render(<MockEducation />);
    const inputElement = screen.getByPlaceholderText(/Degree level/i);
    fireEvent.change(inputElement, { target: { value: "bachelors" } });
    expect(inputElement.value).toBe("bachelors");
  });
  test("major input entry can be typed into", () => {
    render(<MockEducation />);
    const inputElement = screen.getByPlaceholderText(/Major/i);
    fireEvent.change(inputElement, { target: { value: "Major" } });
    expect(inputElement.value).toBe("Major");
  });
  test("state input entry can be typed into", () => {
    render(<MockEducation />);
    const inputElement = screen.getByPlaceholderText(/State/i);
    fireEvent.change(inputElement, { target: { value: "State" } });
    expect(inputElement.value).toBe("State");
  });
  test("degreeDateFrom input entry can be typed into", () => {
    render(<MockEducation />);
    const inputElement = screen.getByTestId("degreeDateFrom");
    fireEvent.change(inputElement, { target: { value: "2022-01-21" } });
    expect(inputElement.value).toBe("2022-01-21");
  });
  test("degreeDateTo input entry can be typed into", () => {
    render(<MockEducation />);
    const inputElement = screen.getByTestId("degreeDateTo");
    fireEvent.change(inputElement, { target: { value: "2022-01-23" } });
    expect(inputElement.value).toBe("2022-01-23");
  });
});
