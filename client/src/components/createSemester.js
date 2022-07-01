import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import CenterSemester from "./CenterSemester";
import Bottom from "./Bottom";
import LeftSideSemester from "./LeftSideSemester";


export default function CreateSemester() {
  const [form, setForm] = useState({
  Semester_Name: "",
  Semester_Number:"",
   Year:"",


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

    await fetch("http://localhost:3000/recordSemester/add", {
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

    setForm({ Semester_Number:"", Year:"",});
    navigate("/recordListSemester");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor="Semester_Name">Semester Name:</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="Semester_Name"
            value={form.Semester_Name}
            onChange={(e) => updateForm({ Semester_Name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Semester_Number">Semester Number:</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Semester_Number"
            value={form.Semester_Number}
            onChange={(e) => updateForm({ Semester_Number: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Year">Year:</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Year"
            value={form.Year}
            onChange={(e) => updateForm({ Year: e.target.value })}
          />
        </div>

     

        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Create Academic " 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSideSemester />  <CenterSemester /> <Bottom />
      </form>
    </div>
  );
}