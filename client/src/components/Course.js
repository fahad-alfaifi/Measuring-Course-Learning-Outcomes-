import React from "react";
import Navbar from "./navbar";
 import Center from "./Center";
import Bottom from "./Bottom";
import { LeftSide_Course } from "./LeftSide_Course";

export const Course = () => {
  return (
    
    <div>
        <Navbar />  <LeftSide_Course />  <Center /> <Bottom />


    </div>
  )
}
export default Course;