import { CopyCat } from "./CopyCat";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from 'react';


it("Displays the provided name", () => {
  render(<CopyCat name={'Mack'} value={''} handleChange={()=>{}} toggleTape={()=>{}} isCopying={true} />)


const text = screen.getByRole('heading');
expect(text).toHaveTextContent('Copy Cat Mack');

});

it("Should display input text in paragraph when isCopying is set to true", () => {
  render(<CopyCat name={'Mack'} value={'Here is an input'} handleChange={()=>{}} toggleTape={()=>{}} isCopying={true} />)

  const isCopycat = screen.queryByAltText("copycat")//getByAltText("copycat") //getAllByAltText("copycat")
  const input = screen.getByRole('textbox');

  const text = screen.queryByTestId("copied-text");

  expect(isCopycat).not.toBeNull(); //toHaveAttribute('alt', 'copycat')
  // expect(input).toBeInTheDocument();
  // expect(input.value).toBe(text);
  expect(input).toHaveValue();
  expect(text).toBeInTheDocument();
  

});

it("Should not display input text in paragraph when isCopying is set to false", () => {

});
