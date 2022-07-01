import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import CenterPrograms from "./CenterPrograms";
import Bottom from "./Bottom";
import LeftSidePrograms from "./LeftSidePrograms";


export default function CreatePrograms() {
  const [form, setForm] = useState({
    Programs_Name: "",
    Programs_mission: "",
    Objectves: "",
    Description: "",
    Learing_Outcomes: "",
    Plan_hours: "",
    

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

    await fetch("http://localhost:3000/recordPrograms/add", {
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

    setForm({ Programs_Name: "",Programs_mission: "", Objectves: "",Description: "",Learing_Outcomes: "",Plan_hours: "",});
    navigate("/RecordListPrograms");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor="Programs_Name">Programs Name</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="Programs_Name"
            value={form.Programs_Name}
            onChange={(e) => updateForm({ Programs_Name: e.target.value })}
          />
        </div>
      
      
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Programs_mission">Programs Mission</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="Programs_mission"
            value={form.Programs_mission}
            onChange={(e) => updateForm({ Programs_mission: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Objectves "> Objectves </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="Objectves"
            value={form.Objectves}
            onChange={(e) => updateForm({Objectves: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Description "> Description </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="Description"
            value={form.Description}
            onChange={(e) => updateForm({Description: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Learing_Outcomes "> Learing Outcomes </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="Learing_Outcomes"
            value={form.Learing_Outcomes}
            onChange={(e) => updateForm({Learing_Outcomes: e.target.value })}
          />

        </div>
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Plan_hours "> Plan Hours </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="nember"
            className="form-control"
            id="Plan_hours"
            value={form.Plan_hours}
            onChange={(e) => updateForm({Plan_hours: e.target.value })}
          />
        </div>

        
        


        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Create " 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSidePrograms />  <CenterPrograms /> <Bottom />
      </form>
    </div>
  );
}