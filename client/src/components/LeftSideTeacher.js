import React from 'react'
import { Link } from "react-router-dom";

export const LeftSideTeacher = () => {
  return (
    <div>
 
 <Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/recordListTeacher"><button className='Second-Button'>  Teachers</button></Link>
 <Link to="/createTeacher"><button className='Third-Button'> Add Teacher</button></Link>
  
 <hr className='hrr'></hr>
 

    </div>
  )
}
export default LeftSideTeacher;

