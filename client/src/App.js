
import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import './App.css';

// We import all the components we need in our app
 
import RecordList from "./components/recordList";
import Edit_Course from "./components/Edit_Course";
import College_Edit from "./components/College_Edit";
import CreateTeacher from "./components/createTeacher";
import RecordListTeacher from "./components/recordListTeacher";
import Programes_edit from "./components/Programes_edit";
import Semester_edit from "./components/Semester_edit";
import Create from "./components/create";
import Course  from "./components/Course";
import ShowMarks from "./components/ShowMarks";
import EditMark from "./components/EditMark";
import Score from "./components/Score";
import ShowClos from "./components/ShowClos";
import College from "./components/College";
import Collegelist from "./components/Collegelist";
import RecordListDepartment from "./components/recordListDepartment";
import RecordListAcademic from "./components/recordListAcademic";
import RecordListSemester from "./components/recordListSemester";
import CreateDepartment from "./components/createDepartment";
import CreateAcademic from "./components/createAcademic";
import CreateSemester from "./components/createSemester";
import CreatePrograms from "./components/createPrograms";
import RecordListPrograms from "./components/recordListPrograms";
import Academic_edit from "./components/Academic_edit";
import RecordListSection from "./components/recordListSection";
import CreateSection from "./components/createSection";

import Login from "./components/Login";

import Home from "./components/Home";

const App = () => {
  return (
    <div>
       
 
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CreateDepartment" element={<CreateDepartment />} />
        <Route exact path="/CreatePrograms" element={<CreatePrograms />} />
        <Route exact path="/CreateAcademic" element={<CreateAcademic />} />
        <Route exact path="/CreateSemester" element={<CreateSemester />} />
        <Route exact path="/RecordListDepartment" element={<RecordListDepartment />} />
        <Route exact path="/recordListAcademic" element={<RecordListAcademic />} />
        <Route exact path="/RecordListSemester" element={<RecordListSemester />} />
        <Route exact path="/RecordListPrograms" element={<RecordListPrograms />} />
        <Route exact path="/College" element={<College />} />
        <Route path="/Edit_Course/:id" element={<Edit_Course />} />
        <Route path="/College_Edit/:id" element={<College_Edit />} />
        <Route path="/dep_edit/:id" element={<dep_edit />} />
        <Route path="/Programes_edit/:id" element={<Programes_edit />} />
        <Route exact path="/Semester_edit" element={<Semester_edit />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Academic_edit" element={<Academic_edit />} />
        <Route path="/createTeacher" element={<CreateTeacher/>} />
        <Route path="/create" element={<Create />} />
        <Route path="/Course/:name" element={<Course />} />
        <Route path="/ShowMarks" element={<ShowMarks />} />
        <Route path="/editMark/:id" element={<EditMark />} />
        <Route exact path="/RecordList" element={<RecordList />} />
        <Route exact path="/Collegelist" element={<Collegelist />} />
        <Route exact path="/recordListTeacher" element={<RecordListTeacher />} />
        <Route exact path="/recordListSection" element={<RecordListSection />} />
        <Route exact path="/createSection" element={<CreateSection />} />
        <Route path="/Score" element={<Score />} />
        <Route path="/CLOs" element={<ShowClos />} />
         
      </Routes>  
      </div>
   
  );
};

export default App;