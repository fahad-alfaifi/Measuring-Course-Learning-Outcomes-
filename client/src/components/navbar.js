import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export const Navbar = () => {
  return (
    
    <div>
<div className='Green-bar'></div>       
<img className='Main-Logo' src={require('./img/kku-logo.png')} />
<p className='Main-Text'>Measuring course learning outcomes</p>
<img className='sign-out' src={require('./img/sign-out.png')} />
<Link to="/Login"><button className='sign-out-button'>  </button></Link>

        </div>
  )
}
export default Navbar;