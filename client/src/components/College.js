import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import Center from "./Center";
import Bottom from "./Bottom";
import LeftSide_College from "./LeftSide_College";


export default function College() {
  const [form, setForm] = useState({
    College_Name: "",
   Vision:"",
   Mission:"",
   Values:"",
   Goals:""
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

    await fetch("http://localhost:3000/recordColleges/add", {
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

    setForm({ College_Name: "", Vision:"", Mission:"",Values:"",Goals:""});
    navigate("/Collegelist");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor="College_Name">College Name</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="College_Name"
            value={form.College_Name}
            onChange={(e) => updateForm({ College_Name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Vision">Vision</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Vision"
            value={form.Vision}
            onChange={(e) => updateForm({ Vision: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Mission">Mission</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Mission"
            value={form.Mission}
            onChange={(e) => updateForm({ Mission: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Values">Values</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Values"
            value={form.Values}
            onChange={(e) => updateForm({ Values: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Goals">Goals</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Goals"
            value={form.Goals}
            onChange={(e) => updateForm({ Goals: e.target.value })}
          />
        </div>


        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Create College " 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSide_College />  <Center /> <Bottom />
      </form>
    </div>
  );
}