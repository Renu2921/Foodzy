import { Link } from "react-router";
import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";
const Header=()=>{
const [toggle, setToggle]=useState("Login");
useEffect(()=>{
    console.log(" header useEffect callback is called")
// },)
// },[])
},[toggle])
    return (
        <div className="navbar">
            <img alt="logo" src={LOGO_URL} className="logo"/>
            <div className="navbar-links">
                <ul> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About US</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <button onClick={()=>{
                    setToggle(toggle=="Login"?"Logout":"Login")
                }}>{toggle}</button>
                </ul>
            </div>
        </div>
        
    )
};

export default Header;