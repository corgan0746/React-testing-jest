import React from 'react';
import { CopyCatContainer } from "./CopyCatContainer";
import "regenerator-runtime";
import {  render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";

import { CopyCat } from "../components/CopyCat";
import userEvent from "@testing-library/user-event";

// const mainEvents = userEvent.setup();
// console.log(userEvent.type)

it("Should display copied text", async () => {

    // const mainEvents = user.setup();

    // const rendered = render(<CopyCat name={'Mack'} value={''} handleChange={()=>{}} toggleTape={()=>{}} isCopying={true} />);
    render(<CopyCatContainer/>);

    

    // const input = screen.getByRole('textbox');
    const input = screen.getByRole('textbox');

    // input.value = "Hello World!"

    // userEvent.type(input, 'Hello World!');

    const img = screen.getByTestId('cat-image')
    // img.click();
    // img.click();
    fireEvent.input(input, {target: {value: "Hello World!"}})
    fireEvent.click(img)
    // fireEvent.click(img)
    expect(img).toHaveAttribute('alt', 'quietcat')
    // expect(img).toBe(1);
    
    // expect().toBe('Mack')
    
    
    

    // screen.findByText("Hello World!").then((res) => {
    //     expect(res).toBeFalsy();
    // });
    
    
    // const text = await screen.findByTestId('copied-text');
    expect(input.value).toBe('Hello World!')
    // expect(text).toHaveValue('Hello World!')
    
    

    // const text = screen.queryByTestId("copied-text");

    
    


});

it("Should remove copied text after putting on tape", () => {

});

it("Should display copied text after removing tape", () => {

});

