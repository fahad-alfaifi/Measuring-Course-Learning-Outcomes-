import React from 'react'
import { Link } from "react-router-dom";

export const LeftSideSemester = () => {
  return (
    <div>
 
 <Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/recordListSemester"><button className='Second-Button'>  Semesters</button></Link>
 <Link to="/createSemester"><button className='Third-Button'> Add Semester</button></Link>
  
 <hr className='hrr'></hr>
 

    </div>
  )
}
export default LeftSideSemester;

