import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import CenterSemester from "./CenterSemester";
import Bottom from "./Bottom";
import LeftSideTeacher from "./LeftSideTeacher";
import CenterTeacher from "./CenterTeacher";


export default function CreateTeacher() {
  const [form, setForm] = useState({
  ID: "",
  Teacher_Name:"",
  Specialization:"",
  Email:"",
  Phone:"",
  Office_Number:"",




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

    await fetch("http://localhost:3000/recordTeacher/add", {
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

    setForm({ID: "", Teacher_Name:"",Specialization:"",Email:"",Phone:"",Office_Number:"",});
    navigate("/recordListTeacher");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor="ID">ID:</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Number"
            className="form-control"
            id="ID"
            value={form.ID}
            onChange={(e) => updateForm({ ID: e.target.valueAsNumber })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Teacher_Name">Teacher Name </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Teacher_Name"
            value={form.Teacher_Name}
            onChange={(e) => updateForm({ Teacher_Name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Specialization">Specialization</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Specialization"
            value={form.Specialization}
            onChange={(e) => updateForm({ Specialization: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Email">Email</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Email"
            value={form.Email}
            onChange={(e) => updateForm({ Email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Phone">Phone</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Phone"
            value={form.Phone}
            onChange={(e) => updateForm({ Phone: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Office_Number">Office Number</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Office_Number"
            value={form.Office_Number}
            onChange={(e) => updateForm({ Office_Number: e.target.value })}
          />
        </div>

     
        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Create " 
            className="btn btn-success"
          />
        </div>      <Navbar />   <LeftSideTeacher />  <CenterTeacher /> <Bottom />
      </form>
    </div>
  );
}