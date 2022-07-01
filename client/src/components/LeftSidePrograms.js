import React from 'react'
import { Link } from "react-router-dom";

export const LeftSidePrograms = () => {
  return (
    <div>
 
 <Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/RecordListPrograms"><button className='Second-Button'> Programs</button></Link>
 <Link to="/CreatePrograms"><button className='Third-Button'> Add Program</button></Link>
 <hr className='hrr'></hr>
 

    </div>
  )
}
export default LeftSidePrograms;

