 
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import CenterMarks from "./CenterMarks";
import Bottom from "./Bottom";
import 'bootstrap/dist/css/bootstrap.css'
import LeftSide_Course from "./LeftSide_Course";

export default function Marks() {
  const [form, setForm] = useState({
    ID: "",
    Assign1: "",
    Assign2: "",
    Quiz1: "",
    Quiz2: "",
    Mid1: "",
    Mid2: "",
    LAB: "",
    Final: "",
 
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

    await fetch("http://localhost:3000/recordMarks/Add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
 

    setForm({ ID: "", Assign1: "", Assign2: "" ,Quiz1: "" ,Quiz2: "" ,Mid1: "" ,Mid2: "" ,LAB: "" , Final: "" });
    navigate("/ShowMarks");
    
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-row" >
        
          <input 
             style={{ height: 30, width:100 , marginTop: 230 ,marginLeft:255 }}
             type="number"
            className="form-control"
            id="ID"
            placeholder="ID"
            value={form.ID}
            onChange={(e) => updateForm({ ID: e.target.valueAsNumber })}
          />
        </div>
      
      
        <div className="form-row" >
        
        <input 
           style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:380 }}
           type="number"
          className="form-control"
          id="Assign1"
          placeholder="Assign1"
          value={form.Assign1}
          onChange={(e) => updateForm({ Assign1: e.target.valueAsNumber })}
        />
      </div>
    

       
      <div className="form-row" >
        
        <input 
           style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:500 }}
           type="number"
          className="form-control"
          id="Assign2"
          placeholder="Assign2"
          value={form.Assign2}
          onChange={(e) => updateForm({ Assign2: e.target.valueAsNumber })}
        />
      </div>


      <div className="form-row" >
        
        <input 
           style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:620 }}
           type="number"
          className="form-control"
          id="Quiz1"
          placeholder="Quiz1"
          value={form.Quiz1}
          onChange={(e) => updateForm({ Quiz1: e.target.valueAsNumber })}
        />
      </div>


      <div className="form-row" >
        
        <input 
           style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:740 }}
           type="number"
          className="form-control"
          id="Quiz2"
          placeholder="Quiz2"
          value={form.Quiz2}
          onChange={(e) => updateForm({ Quiz2: e.target.valueAsNumber })}
        />
      </div>
      
      <div className="form-row" >
        
        <input 
           style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:860 }}
           type="number"
          className="form-control"
          id="Mid1"
          placeholder="Mid1"
          value={form.Mid1}
          onChange={(e) => updateForm({ Mid1: e.target.valueAsNumber })}
        />
      </div>

      <div className="form-row" >
        
        <input 
           style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:950 }}
           type="number"
          className="form-control"
          id="Mid2"
          placeholder="Mid2"
          value={form.Mid2}
          onChange={(e) => updateForm({ Mid2: e.target.valueAsNumber })}
        />
      </div>
      
      <div className="form-row" >
        
        <input 
           style={{ height: 30, width:50 , marginTop: -30 ,marginLeft:1050 }}
          type="number"
          className="form-control"
          id="LAB"
          placeholder="LAB"
          value={form.LAB}
          onChange={(e) => updateForm({ LAB: e.target.valueAsNumber })}
        />
      </div>

      <div className="form-row" >
        
        <input 
           style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:1100 }}
          type="number"
          className="form-control"
          id="Final"
          placeholder="Final"
          value={form.Final}
          onChange={(e) => updateForm({ Final: e.target.valueAsNumber })}
        />
      </div>

      
     

        <div className="form-row">
          <input
            type="submit"
            value="Add" 
            className="AddMarks-Button"
            onClick={() => window.location.reload(false)}
            
          />
        </div>     
          <Navbar />  <LeftSide_Course />  <CenterMarks /> <Bottom />  
   
      </form>
    </div>
  );
}



