 import React from 'react'
import { Link } from "react-router-dom";

export const LeftSide = () => {
  return (
    <div>
 
 <Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/recordList"><button className='Second-Button'> Courses</button></Link>
 <Link to="/create"><button className='Third-Button'> Add Course</button></Link>
 <hr className='hrr'></hr>
 

    </div>
  )
}
export default LeftSide;

