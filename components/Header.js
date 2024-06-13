import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react"
import {Link} from 'react-router-dom'

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login")

    useEffect(()=>{
        console.log("useEffect Called")
    },[])
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} >
            </img>
        </div>

        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li>Cart</li>
                <button className="login-button" onClick={()=>{
                    btnNameReact==="Login"?
                    setBtnNameReact("Logout"):
                    setBtnNameReact("Login");
                }
            }
                    >
                        {btnNameReact}
                        </button>
            </ul>
        </div>
    </div>
);
}

export default Header;