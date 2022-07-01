import React from 'react'
import { Link } from "react-router-dom";

export const LeftSideSection = () => {
  return (
    <div>
 
 <Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/recordListSection"><button className='Second-Button'>  Sections</button></Link>
 <Link to="/createSection"><button className='Third-Button'> Add Section</button></Link>
  
 <hr className='hrr'></hr>
 

    </div>
  )
}
export default LeftSideSection;

