import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import LeftSide from "./LeftSide";
import Center from "./Center";
import Bottom from "./Bottom";


export default function Create() {
  const [form, setForm] = useState({
    name: "",
    Section_Number: "",
    Teacher_Name: "",
    Description:"",
    Objectives:"",
    Topics:"",
    TextbBook:""
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

    await fetch("http://localhost:3000/record/add", {
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

    setForm({ name: "", Section_Number: "", Teacher_Name: "", Description:"", Objectives:"", Topics:"",TextbBook:""});
    navigate("/RecordList");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor="name">Courses Name</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
      
      
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Section_Number">Course Code</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Section_Number"
            value={form.Section_Number}
            onChange={(e) => updateForm({ Section_Number: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Teacher_Name">Hours</label>
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
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Description">Description</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Description"
            value={form.Description}
            onChange={(e) => updateForm({ Description: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Objectives">Objectives</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Objectives"
            value={form.Objectives}
            onChange={(e) => updateForm({ Objectives: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Topics">Topics</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Topics"
            value={form.Topics}
            onChange={(e) => updateForm({ Topics: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="TextbBook">TextbBook</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="TextbBook"
            value={form.TextbBook}
            onChange={(e) => updateForm({ TextbBook: e.target.value })}
          />
        </div>



        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Create Course" 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSide />  <Center /> <Bottom />
      </form>
    </div>
  );
}