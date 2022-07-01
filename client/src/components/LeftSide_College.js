import React from 'react'
import { Link ,Route } from "react-router-dom";

export const LeftSide_College = () => {
  return (
    
    <div>

<Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/Collegelist"><button className='Second-Button'> Colleges</button></Link>
 <Link to="/College"><button className='Third-Button'> Add College</button></Link>

 <hr className='hrr'></hr>


    </div>
  )
}
export default LeftSide_College;

