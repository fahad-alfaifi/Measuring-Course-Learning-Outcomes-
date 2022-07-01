import React from 'react'

import Navbar from './navbar'
import LeftSide_Course from './LeftSide_Course'
import CenterMarks from './CenterMarks'
import Bottom from './Bottom'
import MarksList from './Markslist'
import Marks from './Marks'
export default function ShowMarks() {
  return (
    <div>
       
       
       <Navbar />  <LeftSide_Course />  <CenterMarks /> <Bottom />  <Marks/> <MarksList/>
    </div>
  )
}
