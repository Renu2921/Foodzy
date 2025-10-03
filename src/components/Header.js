import {LOGO_URL} from "../utils/constants";
const Header=()=>{
    return (
        <div className="navbar">
            <img alt="logo" src={LOGO_URL} className="logo"/>
            <div className="navbar-links">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>Login/Sign-up</li>
                </ul>
            </div>
        </div>
        
    )
};

export default Header;