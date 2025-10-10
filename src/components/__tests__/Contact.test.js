import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

// groupin of test cases
describe("grouping of contact us test cases",()=>{
    test("is this component render",()=>{
    render(<Contact/>);
    const heading=screen.getByRole("heading");
    // const headings=screen.getByText("this is contact us page");
// Assertion
    expect(heading).toBeInTheDocument();
});

it("should include the button",()=>{
    render(<Contact/>);

    const button=screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

it("should include all  the input",()=>{
    render(<Contact/>);

    const inputs=screen.getAllByRole("textbox");
    // console.log(inputs) // it is an array

    expect(inputs.length).toBe(2);
});
})
