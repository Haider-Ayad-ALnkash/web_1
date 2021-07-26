import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo/MY_LOGO.png'
const Nav =()=>{
    return(
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <img className="imgLogo" src={logo} alt="logo"/>
                    </div>
                    <input type="checkbox" id="nav"/>
                    <label htmlFor="nav"></label>
                    <div className="links">
                    <ul className="ul-links">
                        
                        <li className="item-link"><Link  data-section=".profile_About" to =""> About</Link></li>
                        <li className="item-link"> <Link  data-section=".work" to =""> Work</Link></li>
                        <li className="item-link"> <Link  data-section=".portfolio" to =""> portfolio</Link></li>
                        <li className="item-link" > <Link data-section=".creative" to ="#"> Creative</Link></li>
                        <li className="item-link"> <Link  data-section=".drop" to =""> Contact</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
    )
}
//Scroll to section
let links=document.querySelectorAll(".navbar .links .ul-links");
links.forEach(link => {
    link.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
           behavior:'smooth' 
        })
    });
});
export default Nav;