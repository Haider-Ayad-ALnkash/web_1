import React from 'react';
import { Link } from 'react-router-dom';
const Nav =()=>{
    return(
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <h2 className="logo-text">Ultra profile</h2>
                    </div>
                    <input type="checkbox" id="nav"/>
                    <label for="nav"></label>
                    <div className="links">
                    <ul className="ul-links">
                        <li className="item-link"><Link to="/"> Home</Link></li> 
                        <li className="item-link"> <Link to =""> Work</Link></li>
                        <li className="item-link"> <Link to =""> Portio</Link></li>
                        <li className="item-link"> <Link to =""> Resua</Link></li>
                        <li className="item-link"><Link to =""> About</Link></li>
                        <li className="item-link"> <Link to ="/contact"> Contact</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
    )
}
export default Nav;