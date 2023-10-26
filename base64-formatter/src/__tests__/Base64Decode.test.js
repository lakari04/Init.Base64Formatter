import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Base64Page from "../pages/Base64Page/Base64Page";
import DecodeBase64 from "../components/DecodeBase64";
import { act } from "react-dom/test-utils";
import React from "react";
import App from '../App';

test('test4', () =>{
  render(<App></App>);

});
// it("Should show Decode Component", () => {
//   const setRadioValue = jest.fn();
//   const setRadioText = jest.fn();
//   const setResultValue = jest.fn();
//   let radioValue = 0;

//   jest
//     .spyOn(React, "useState")
//     .mockImplementationOnce((radioValue) => [radioValue, setRadioValue])
//     .mockImplementationOnce((initState) => [initState, setRadioText])
//     .mockImplementationOnce((initState) => [initState, setResultValue]);
//   render(<Base64Page />);
//   act(() => fireEvent.click(screen.getByTestId("toggle-button-0")));
//   expect(screen.getByTestId('decode-component')).toBeInTheDocument();
  
  // const appbase64PageElement = screen.getByTestId("base64page-form");
  // // act(() => userEvent.click(screen.getByTestId('toggle-button-1')));
  // expect(appbase64PageElement).toBeTruthy();

  // act(() => userEvent.click(screen.getByTestId("toggle-button-0")));
  // const decodeElement = screen.getByTestId("base64page-Decode");
  // expect(decodeElement).toBeTruthy();
  // expect(decodeElement).toHaveTextContent(/Decode/i);

// });
