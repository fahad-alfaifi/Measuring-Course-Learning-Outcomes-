import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import LeftSide from "./LeftSide";
import CenterAcademic from "./CenterAcademic";
import Bottom from "./Bottom";
import LeftSideAcademic from "./LeftSideAcademic";


export default function CreateAcademic() {
  const [form, setForm] = useState({
    Academic_Year: "",
   

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

    await fetch("http://localhost:3000/recordAcademic/add", {
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

    setForm({ Academic_Year: "",});
    navigate("/recordListAcademic");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor="Academic_Year">Academic Year:</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="Academic_Year"
            value={form.Academic_Year}
            onChange={(e) => updateForm({ Academic_Year: e.target.value })}
          />
        </div>

        

        
  


        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Create Academic " 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSideAcademic />  <CenterAcademic /> <Bottom />
      </form>
    </div>
  );
}