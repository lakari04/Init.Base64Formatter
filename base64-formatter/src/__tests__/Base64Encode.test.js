import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Base64Page from "../pages/Base64Page/Base64Page";
import { act } from "react-dom/test-utils";
import React from "react";

describe("Test my component", () => {
  // beforeEach(() => {
  //   const setRadioValue = jest.fn();
  //   const setRadioText = jest.fn();
  //   const setResultValue = jest.fn();
  //   jest
  //   .spyOn(React, "useState")
  //   .mockImplementationOnce(() => [1, setRadioValue])
  //   .mockImplementationOnce((initState) => [initState, setRadioText])
  //   .mockImplementationOnce((initState) => [initState, setResultValue]);
  // });
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  test("test1", () => {
    render(<App></App>);
    const appElement = screen.getByTestId(/app/i);
    expect(appElement).toBeInTheDocument();
    expect(appElement).toHaveTextContent("Formatter");
  });

  test("test2", () => {
    const setRadioValue = jest.fn();
    const setRadioText = jest.fn();
    const setResultValue = jest.fn();
    jest
    .spyOn(React, "useState")
    .mockImplementationOnce(() => [1, setRadioValue])
    .mockImplementationOnce((initState) => [initState, setRadioText])
    .mockImplementationOnce((initState) => [initState, setResultValue]);

    render(<Base64Page />);
    fireEvent.click(screen.getByTestId("toggle-button-0"));
      const comp = screen.getByTestId('encode-component');
    expect(comp).toBeInTheDocument();
    expect(comp).toHaveTextContent(/Encode/i);
    expect(comp).toHaveTextContent(/Encoded result/i);
  });

  test("Should show Decode Component", () => {
      const setRadioValue = jest.fn();
      const setRadioText = jest.fn();
      const setResultValue = jest.fn();
      jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [0, setRadioValue])
      .mockImplementationOnce((initState) => [initState, setRadioText])
      .mockImplementationOnce((initState) => [initState, setResultValue]);
    render(<Base64Page />);
    fireEvent.click(screen.getByTestId("toggle-button-0"));
    // expect(screen.getByTestId('decode-component')).toBeInTheDocument();

    // const appbase64PageElement = screen.getByTestId("base64page-form");
    // // act(() => userEvent.click(screen.getByTestId('toggle-button-1')));
    // expect(appbase64PageElement).toBeTruthy();

    // act(() => userEvent.click(screen.getByTestId("toggle-button-0")));
    // const decodeElement = screen.getByTestId("base64page-Decode");
    // expect(decodeElement).toBeTruthy();
    // expect(decodeElement).toHaveTextContent(/Decode/i);

  });
  // it("Should show Encode Component", () => {

  //   render(<Base64Page />);
  //   fireEvent.click(screen.getByTestId("toggle-button-1"));
  // const comp = screen.getByTestId('encode-component');
  //   expect(comp).toBeInTheDocument();
  //   expect(comp).toHaveTextContent(/Encode/i);
  //   expect(comp).toHaveTextContent(/Encoded result/i);

  // });

  // it("Should show Decode Component", () => {
  //   render(<Base64Page />);
  //   fireEvent.click(screen.getByTestId("toggle-button-0"));
  //   expect(screen.getByTestId('decode-component')).toBeInTheDocument();

  //   // const appbase64PageElement = screen.getByTestId("base64page-form");
  //   // // act(() => userEvent.click(screen.getByTestId('toggle-button-1')));
  //   // expect(appbase64PageElement).toBeTruthy();

  //   // act(() => userEvent.click(screen.getByTestId("toggle-button-0")));
  //   // const decodeElement = screen.getByTestId("base64page-Decode");
  //   // expect(decodeElement).toBeTruthy();
  //   // expect(decodeElement).toHaveTextContent(/Decode/i);

  // });
});

// test('test', () =>{
//   render(<Base64Page></Base64Page>);

// });
