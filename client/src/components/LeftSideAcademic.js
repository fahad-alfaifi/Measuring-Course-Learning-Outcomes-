import React from 'react'
import { Link } from "react-router-dom";

export const LeftSideAcademic = () => {
  return (
    <div>
 
 <Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/recordListAcademic"><button className='Second-Button'> Academic Years</button></Link>
 <Link to="/createAcademic"><button className='Third-Button'> Add Academic year</button></Link>
 
 <hr className='hrr'></hr>
 

    </div>
  )
}
export default LeftSideAcademic;

