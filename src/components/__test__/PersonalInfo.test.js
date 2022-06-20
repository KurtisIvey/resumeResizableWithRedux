import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import PersonalInfo from "../PersonalInfo";
import { store } from "../../store/store";

const MockPersonalInfo = () => {
  return (
    <Provider store={store}>
      <PersonalInfo />
    </Provider>
  );
};

test("tests my mock to make sure I didn't screw that up too", () => {
  render(<MockPersonalInfo />);
  const sectionHeaderElement = screen.getByText(/Personal Info/i);
  expect(sectionHeaderElement).toBeInTheDocument();
});

describe("Input entries", () => {
  test("first name input entry can be typed into", () => {
    render(<MockPersonalInfo />);
    const inputElement = screen.getByPlaceholderText(/First Name/i);
    fireEvent.change(inputElement, { target: { value: "Kurtis" } });
    expect(inputElement.value).toBe("Kurtis");
  });

  test("last name input entry can be typed into", () => {
    render(<MockPersonalInfo />);
    const inputElement = screen.getByPlaceholderText(/Last Name/i);
    fireEvent.change(inputElement, { target: { value: "ivey" } });
    expect(inputElement.value).toBe("ivey");
  });
  test("address input entry can be typed into", () => {
    render(<MockPersonalInfo />);
    const inputElement = screen.getByPlaceholderText(/Address/i);
    fireEvent.change(inputElement, { target: { value: "123 address" } });
    expect(inputElement.value).toBe("123 address");
  });
  test("email input entry can be typed into", () => {
    render(<MockPersonalInfo />);
    const inputElement = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(inputElement, { target: { value: "email@gmail.com" } });
    expect(inputElement.value).toBe("email@gmail.com");
  });
  test("phone number input entry can be typed into", () => {
    render(<MockPersonalInfo />);
    const inputElement = screen.getByPlaceholderText(/Phone Number/i);
    fireEvent.change(inputElement, { target: { value: "1231231234" } });
    expect(inputElement.value).toBe("1231231234");
  });
});
