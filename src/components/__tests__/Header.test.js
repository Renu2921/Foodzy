const { render, screen } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header"
import "@testing-library/jest-dom";
import Store  from "../../utils/store/Store"
import { BrowserRouter } from "react-router-dom";

test("Should load the header component",()=>{
    render(
        <BrowserRouter>
        <Provider store={Store}>
             <Header/> 
        </Provider>
        </BrowserRouter>
   );
    const button= screen.getByRole("button",{name:"Login"});
    expect(button).toBeInTheDocument();
})