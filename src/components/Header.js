import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
const [toggle, setToggle]=useState("Login");
const onlineStatus=useOnlineStatus();

const data=useContext(UserContext);
const cart=useSelector((store)=>store.cart.items);
console.log("cart",cart)
useEffect(()=>{
    // console.log(" header useEffect callback is called")
// },)
// },[])
},[toggle])
    return (
        <div className=" flex justify-between items-center p-5 border-b-2">
            <img alt="logo" src={LOGO_URL} className="w-24 h-24"/>
            <div className="">
                <ul className="flex text-xl gap-5"> 
                    <li>Online Status: {onlineStatus?"✅" :"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/cart">Cart({cart.length} items)</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <button onClick={()=>{
                    setToggle(toggle=="Login"?"Logout":"Login")
                }}
                className="border border-gray-500 rounded-md px-3 bg-green-100  "
                >{toggle}</button>
                 <li className="text-green-500">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
         
    )
};

export default Header;