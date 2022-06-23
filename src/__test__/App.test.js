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
  test("resume output renders", () => {
    render(<MockApp />);
    const containerElement = screen.getByText(/Personal Details/i);
    expect(containerElement).toBeInTheDocument();
  });
});
describe("Personal info section is taking input and rendering via state read", () => {
  test("first name input entry typed into and rendered onto resume container", () => {
    render(<MockApp />);
    const inputElement = screen.getByPlaceholderText(/First Name/i);
    fireEvent.change(inputElement, { target: { value: "Kurtis" } });
    const matchedText = screen.getByText(/Kurtis/i);
    // verified through console log through testing that the correct h2 element took said value
    // via console.log(matchedText) && verified via matchedText.length that only the h2 element showed up
    expect(matchedText).toBeInTheDocument();
  });
  test("last name input entry typed into and rendered onto resume container", () => {
    render(<MockApp />);
    const inputElement = screen.getByPlaceholderText(/First Name/i);
    fireEvent.change(inputElement, { target: { value: "ivey" } });
    const matchedText = screen.getByText(/Ivey/i);
    // verified through console log through testing that the correct h2 element took said value
    // via console.log(matchedText) && verified via matchedText.length that only the h2 element showed up
    expect(matchedText).toBeInTheDocument();
  });
  test("address input entry typed into and rendered onto resume container", () => {
    render(<MockApp />);
    const inputElement = screen.getByPlaceholderText(/Address/i);
    fireEvent.change(inputElement, { target: { value: "123 address" } });
    const matchedText = screen.getByText(/123 address/i);
    // verified through console log through testing that the correct element took said value
    // via console.log(matchedText) && verified via matchedText.length that only the rendered element showed up
    expect(matchedText).toBeInTheDocument();
  });
  test("email input entry typed into and rendered onto resume container", () => {
    render(<MockApp />);
    const inputElement = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(inputElement, { target: { value: "email@gmail.com" } });
    const matchedText = screen.getByText(/email@gmail.com/i);
    // verified through console log through testing that the correct element took said value
    // via console.log(matchedText) && verified via matchedText.length that only the rendered element showed up
    expect(matchedText).toBeInTheDocument();
  });
  test("phone number input entry typed into and rendered onto resume container", () => {
    render(<MockApp />);
    const inputElement = screen.getByPlaceholderText(/Phone Number/i);
    fireEvent.change(inputElement, { target: { value: "1231231234" } });
    const matchedText = screen.getByText(/1231231234/i);
    // verified through console log through testing that the correct element took said value
    // via console.log(matchedText) && verified via matchedText.length that only the rendered element showed up
    expect(matchedText).toBeInTheDocument();
  });
});

describe("education input section taking input and rendering through state read properly", () => {
  test("after filling out all education inputs and clicking add, the input fields reset and render on the resume container", () => {
    render(<MockApp />);
    const uni = screen.getByPlaceholderText(/University/i);
    fireEvent.change(uni, { target: { value: "University" } });
    const degree = screen.getByPlaceholderText(/Degree level/i);
    fireEvent.change(degree, { target: { value: "bachelors" } });
    const major = screen.getByPlaceholderText(/Major/i);
    fireEvent.change(major, { target: { value: "Major" } });
    const state = screen.getByPlaceholderText(/State/i);
    fireEvent.change(state, { target: { value: "State" } });
    const degreeDateFrom = screen.getByTestId("degreeDateFrom");
    fireEvent.change(degreeDateFrom, { target: { value: "2022-01-21" } });
    const degreeDateTo = screen.getByTestId("degreeDateTo");
    fireEvent.change(degreeDateTo, { target: { value: "2022-01-23" } });

    const addBtn = screen.getByTestId("educationAddBtn");
    fireEvent.click(addBtn);
    expect(uni.value).toBe("");
    expect(degree.value).toBe("");
    expect(major.value).toBe("");
    expect(state.value).toBe("");
    expect(degreeDateFrom.value).toBe("");
    expect(degreeDateTo.value).toBe("");
    const educationTargetcontainer = screen.getAllByTestId("renderedEdItem");
    expect(educationTargetcontainer.length).toBe(1);
  });
  test("delete button within education input entry container works", () => {
    render(<MockApp />);
    const uni = screen.getByPlaceholderText(/University/i);
    fireEvent.change(uni, { target: { value: "University" } });
    const degree = screen.getByPlaceholderText(/Degree level/i);
    fireEvent.change(degree, { target: { value: "bachelors" } });
    const major = screen.getByPlaceholderText(/Major/i);
    fireEvent.change(major, { target: { value: "Major" } });
    const state = screen.getByPlaceholderText(/State/i);
    fireEvent.change(state, { target: { value: "State" } });
    const degreeDateFrom = screen.getByTestId("degreeDateFrom");
    fireEvent.change(degreeDateFrom, { target: { value: "2022-01-21" } });
    const degreeDateTo = screen.getByTestId("degreeDateTo");
    fireEvent.change(degreeDateTo, { target: { value: "2022-01-23" } });

    const addBtn = screen.getByTestId("educationAddBtn");
    fireEvent.click(addBtn);

    const deleteBtn = screen.getByTestId("educationDeleteBtn");
    // deletes entry from previous test due to it remaining on the render
    // therefore, deleteBtn is clicked twice
    fireEvent.click(deleteBtn);
    fireEvent.click(deleteBtn);

    const educationTargetcontainer = screen.queryByTestId("renderedEdItem");
    expect(educationTargetcontainer).toBe(null);
  });
  test("education input added twice fully and submitted, renders to resume", () => {
    render(<MockApp />);

    const uni = screen.getByPlaceholderText(/University/i);
    fireEvent.change(uni, { target: { value: "University" } });
    const degree = screen.getByPlaceholderText(/Degree level/i);
    fireEvent.change(degree, { target: { value: "bachelors" } });
    const major = screen.getByPlaceholderText(/Major/i);
    fireEvent.change(major, { target: { value: "Major" } });
    const state = screen.getByPlaceholderText(/State/i);
    fireEvent.change(state, { target: { value: "State" } });
    const degreeDateFrom = screen.getByTestId("degreeDateFrom");
    fireEvent.change(degreeDateFrom, { target: { value: "2022-01-21" } });
    const degreeDateTo = screen.getByTestId("degreeDateTo");
    fireEvent.change(degreeDateTo, { target: { value: "2022-01-23" } });
    const addBtn = screen.getByTestId("educationAddBtn");
    fireEvent.click(addBtn);

    fireEvent.change(uni, { target: { value: "University" } });
    fireEvent.change(degree, { target: { value: "bachelors" } });
    fireEvent.change(major, { target: { value: "Major" } });
    fireEvent.change(state, { target: { value: "State" } });
    fireEvent.change(degreeDateFrom, { target: { value: "2022-01-21" } });
    fireEvent.change(degreeDateTo, { target: { value: "2022-01-23" } });
    fireEvent.click(addBtn);

    const educationTargetcontainer = screen.getAllByTestId("renderedEdItem");
    expect(educationTargetcontainer.length).toBe(2);
  });
});

describe("experience input section taking input and rendering through state read properly", () => {
  test("after filling out all experience inputs and clicking add, the input fields reset and render on the resume container", () => {
    render(<MockApp />);
    const previousJobInputElement =
      screen.getByPlaceholderText(/Previous Job/i);
    fireEvent.change(previousJobInputElement, {
      target: { value: "previous job entry" },
    });
    const previousJobFromInputElement = screen.getByTestId("previousJobFrom");
    fireEvent.change(previousJobFromInputElement, {
      target: { value: "2022-01-21" },
    });
    const previousJobToInputElement = screen.getByTestId("previousJobTo");
    fireEvent.change(previousJobToInputElement, {
      target: { value: "2022-03-21" },
    });
    const addBtn = screen.getByTestId("experienceAddBtn");
    fireEvent.click(addBtn);

    const experienceTargetContainer = screen.getAllByTestId("renderedExpItem");
    expect(experienceTargetContainer.length).toBe(1);
    // must run delete btn in container to take away previous entry that remains on the dom during testing
  });

  test("delete function works and erases previous entries from the dom", () => {
    render(<MockApp />);
    const previousJobInputElement =
      screen.getByPlaceholderText(/Previous Job/i);
    fireEvent.change(previousJobInputElement, {
      target: { value: "previous job entry" },
    });
    const previousJobFromInputElement = screen.getByTestId("previousJobFrom");
    fireEvent.change(previousJobFromInputElement, {
      target: { value: "2022-01-21" },
    });
    const previousJobToInputElement = screen.getByTestId("previousJobTo");
    fireEvent.change(previousJobToInputElement, {
      target: { value: "2022-03-21" },
    });
    const addBtn = screen.getByTestId("experienceAddBtn");
    fireEvent.click(addBtn);
    const deleteBtn = screen.getByTestId("experienceDeleteBtn");
    fireEvent.click(deleteBtn);
    // called twice to erase render from previous test
    fireEvent.click(deleteBtn);
    const experienceTargetContainer = screen.queryByTestId("renderedExpItem");
    expect(experienceTargetContainer).toBe(null);
  });
  test("experience input fields filled out and added twice, successfully renders to dom properly", () => {
    render(<MockApp />);
    const previousJobInputElement =
      screen.getByPlaceholderText(/Previous Job/i);
    fireEvent.change(previousJobInputElement, {
      target: { value: "previous job entry" },
      //
    });
    const previousJobFromInputElement = screen.getByTestId("previousJobFrom");
    fireEvent.change(previousJobFromInputElement, {
      target: { value: "2022-01-21" },
    });
    const previousJobToInputElement = screen.getByTestId("previousJobTo");
    fireEvent.change(previousJobToInputElement, {
      target: { value: "2022-03-21" },
    });
    const addBtn = screen.getByTestId("experienceAddBtn");
    fireEvent.click(addBtn);
    fireEvent.change(previousJobInputElement, {
      target: { value: "previous job entry" },
    });
    fireEvent.change(previousJobFromInputElement, {
      target: { value: "2022-01-21" },
    });
    fireEvent.change(previousJobToInputElement, {
      target: { value: "2022-03-21" },
    });
    fireEvent.click(addBtn);
    const experienceTargetContainer = screen.getAllByTestId("renderedExpItem");
    expect(experienceTargetContainer.length).toBe(2);
    // must run delete btn in container to take away previous entry that remains on the dom during testing
  });
});
