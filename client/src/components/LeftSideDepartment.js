import React from 'react'
import { Link } from "react-router-dom";

export const LeftSideDepartment = () => {
  return (
    <div>
 
 <Link to="/"><button className='First-Button'> Home</button></Link>
 <Link to="/RecordListDepartment"><button className='Second-Button'> Departments</button></Link>
 <Link to="/createDepartment"><button className='Third-Button'> Add Department</button></Link>
 <hr className='hrr'></hr>
 

    </div>
  )
}
export default LeftSideDepartment;

