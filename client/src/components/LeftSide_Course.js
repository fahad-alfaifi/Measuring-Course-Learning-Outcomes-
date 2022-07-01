import React from 'react'
import { Link ,Route } from "react-router-dom";

export const LeftSide_Course = () => {
  return (
    
    <div>

  <Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/ShowMarks"><button className='Second-Button'> Marks</button></Link>
 <Link to="/CLOs"><button className='Third-Button'> CLOs</button></Link>
 <Link to="/Score"><button className='Fourth-Button'> Scores</button></Link>


 <hr className='hrr'></hr>


    </div>
  )
}
export default LeftSide_Course;

