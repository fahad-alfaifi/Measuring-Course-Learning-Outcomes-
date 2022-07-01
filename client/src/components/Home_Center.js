 
import React from 'react'
import { Link } from "react-router-dom";
export const Home_Center = () => {
  return (
    <div>
      
        <div className='Home_Center'></div>
        <img className='Icon-Home' src={require('./img/home.png')} />
        <p className='Text-Home'> Home</p>
 
        <div className='Home-College'></div>
        <img className='Icon-university' src={require('./img/university.png')} />
        <Link to="/Collegelist"><button className='College-button'> Colleges </button></Link>

        <div className='Home-Department'></div>
        <img className='Icon-department' src={require('./img/department.png')} />
        <Link to="/RecordListDepartment"><button className='Department-button'> Departments  </button></Link>
       
       <div className='Home-Programs'></div>
        <img className='Icon-program' src={require('./img/program.png')} />
        <Link to="/RecordListPrograms"><button className='program-button'> Programs  </button></Link>

        <div className='Home-Course'></div>
        <img className='Icon_courses' src={require('./img/icon courses.png')} />
        <Link to="/RecordList"><button className='Courses-Button'> Courses</button></Link>
        
        <div className='Home-Academic'></div>
        <img className='Icon_Academic' src={require('./img/mortarboard.png')} />
        <Link to="/recordListAcademic"><button className='Academic-button'> Academic Years</button></Link>
       
        <div className='Home-Semester'></div>
        <img className='Icon_Semester' src={require('./img/semester.png')} />
        <Link to="/recordListSemester"><button className='Semester-button'> Semesters</button></Link>

        <div className='Home-Teacher'></div>
        <img className='Icon_Teacher' src={require('./img/teacher.png')} />
        <Link to="/recordListTeacher"><button className='Teacher-button'> Teachers</button></Link>

        <div className='Home-Section'></div>
        <img className='Icon_Section' src={require('./img/sections.png')} />
        <Link to="/recordListSection"><button className='Section-button'> Sections</button></Link>
    

    </div>
  )
}

export default Home_Center;