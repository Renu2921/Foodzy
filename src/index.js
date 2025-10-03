import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyLayout from "./components/BodyLayout";



const AppLayout=()=>{
    return (
        <div className="container">
            <Header/>
            <BodyLayout/>

        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
