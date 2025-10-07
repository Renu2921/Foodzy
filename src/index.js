import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyLayout from "./components/BodyLayout";
import Cart from "./components/Cart";
// import About from "./components/About";
import RestroMenu from "./components/RestroMenu";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import ErrorPage from "./components/ErrorPage";


// using lazy loading
const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"))

const AppLayout=()=>{
    return (
        <div className="container">
            <Header/>
            <Outlet  />

        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
    {
        path:"/",
        element:<BodyLayout/>
    },
    {
        path:"/about",
        element:(<Suspense fallback={<h1>loading.....</h1>}><About/></Suspense>)
    },
    {
        path:"/cart",
        element:<Cart/>
    },
    {
        path:"/grocery",
        element:(<Suspense fallback={
            <h1>loading.......</h1>
        }><Grocery/> </Suspense>)
    },
    {
        path:"/restaurant/:resId",
        element:<RestroMenu/>
    }   
        ],
        errorElement:<ErrorPage/>
    } 
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
