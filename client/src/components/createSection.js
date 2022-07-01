import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import Bottom from "./Bottom";
import LeftSideSection from "./LeftSideSection";
import CenterSection from "./CenterSection";


export default function CreateSection() {
  const [form, setForm] = useState({
  Section_Number: "",
  Academic_Year:"",
  Semester:"",
  Teacher:"",
  Course:"",


  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:3000/recordSection/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({Section_Number: "", Academic_Year:"",Semester:"",Teacher:"", Course:"",});
    navigate("/recordListSection");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor="Section_Number">Section Number:</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Number"
            className="form-control"
            id="Section_Number"
            value={form.Section_Number}
            onChange={(e) => updateForm({ Section_Number: e.target.valueAsNumber })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Academic_Year">Academic Year </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Academic_Year"
            value={form.Academic_Year}
            onChange={(e) => updateForm({ Academic_Year: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Semester">Semester </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Semester"
            value={form.Semester}
            onChange={(e) => updateForm({ Semester: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Teacher">Teacher </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Teacher"
            value={form.Teacher}
            onChange={(e) => updateForm({ Teacher: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Course">Course </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Course"
            value={form.Course}
            onChange={(e) => updateForm({ Course: e.target.value })}
          />
        </div>

     
     
        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Create " 
            className="btn btn-success"
          />
        </div>      <Navbar />   <LeftSideSection />  <CenterSection /> <Bottom />
      </form>
    </div>
  );
}