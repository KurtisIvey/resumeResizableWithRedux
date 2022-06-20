import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../store/store";

const MockApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
test("tests my mock to make sure I didn't screw that up too", () => {
  render(<MockApp />);
  const sectionHeaderElement = screen.getByText(/Resume/i);
  expect(sectionHeaderElement).toBeInTheDocument();
});
describe("different components are rendering through app", () => {
  test("personal Info input section renders", () => {
    render(<MockApp />);
    const sectionHeaderElement = screen.getByText(/Personal Info/i);
    expect(sectionHeaderElement).toBeInTheDocument();
  });
  test("education input section renders", () => {
    render(<MockApp />);
    const inputElement = screen.getByPlaceholderText(/University/i);
    expect(inputElement).toBeInTheDocument();
  });
  test("experience input section renders", () => {
    render(<MockApp />);
    const inputElement = screen.getByPlaceholderText(/Previous Job/i);
    expect(inputElement).toBeInTheDocument();
  });
});
