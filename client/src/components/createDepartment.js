import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import LeftSideDepartment from "./LeftSideDepartment";
import CenterDepartment from "./CenterDepartment";
import Bottom from "./Bottom";


export default function CreateDepartment() {
  const [form, setForm] = useState({
    Department_Name: "",
    Vision:"",
    Mission:"",
    Values:"",
    Goals:"",

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

    await fetch("http://localhost:3000/recordDepartment/add", {
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

    setForm({Department_Name: "" ,Vision:"",Values:"",Goals:"",});
    navigate("/RecordListDepartment");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
     
     

     
     
     
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor=" Department_Name">Department Name</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:400 }}
            type="text"
            className="form-control"
            id=" Department_Name"
            value={form. Department_Name}
            onChange={(e) => updateForm({  Department_Name: e.target.value })}
          />
        </div>

        

    <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Vision">Vision:</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:400 }}
            type="Text"
            className="form-control"
            id="Vision"
            value={form.Vision}
            onChange={(e) => updateForm({ Vision: e.target.value })}
          />
        </div>
      
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Values">Values:</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:400 }}
            type="Text"
            className="form-control"
            id="Values"
            value={form.Values}
            onChange={(e) => updateForm({ Values: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Goals">Goals:</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:400 }}
            type="Text"
            className="form-control"
            id="Goals"
            value={form.Goals}
            onChange={(e) => updateForm({ Goals: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
           style={{  width: 170, marginTop: 20 ,marginLeft:430 }}
            type="submit"
            value="Create Department" 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSideDepartment />  <CenterDepartment /> <Bottom />
      </form>
    </div>
  );
}