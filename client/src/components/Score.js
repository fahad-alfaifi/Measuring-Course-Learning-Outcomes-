import React from 'react'

import Navbar from './navbar'
import LeftSide_Course from './LeftSide_Course'
import Center from './Center'
import Bottom from './Bottom'
import MarksList from './Markslist'
import Marks from './Marks'
import BarChart from './BarChart'
import PieChart from './PieChart'
export default function Score() {
  return (
    <div>
       
       
       <Navbar />  <LeftSide_Course />  <Center /> <Bottom />  <BarChart/> <PieChart/>
    </div>
  )
}
