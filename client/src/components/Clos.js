 
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import CenterClo from "./CenterClo";
import Bottom from "./Bottom";
import 'bootstrap/dist/css/bootstrap.css'
 
import LeftSide_Course from "./LeftSide_Course";

export default function Clos() {
  const [form, setForm] = useState({
    CLO: "",
    CLO_Domain: "",
    Assign1: "",
    Assign2: "",
    Quiz1: "",
    Quiz2: "",
    Mid1: "",
    Mid2: "",
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

    await fetch("http://localhost:3000/recordClos/Add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
 

    setForm({ CLO: "", CLO_Domain: "", Assign1: "", Assign2: "" ,Quiz1: "" ,Quiz2: "" ,Mid1: "" ,Mid2: "" , Final: "" });
    navigate("/ShowClos");
    
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-row" >
        
          <input 
             style={{ height: 30, width:150 , marginTop: 230 ,marginLeft:250 }}
             type="text"
            className="form-control"
            id="CLO"
            placeholder="CLO"
            value={form.CLO}
            onChange={(e) => updateForm({ CLO: e.target.value })}
          />
        </div>
      

        <div className="form-row" >
        
        <input 
           style={{ height: 30, width:80 , marginTop: -30 ,marginLeft:420 }}
           type="text"
          className="form-control"
          id="CLO_Domain"
          placeholder="Domain"
          value={form.CLO_Domain}
          onChange={(e) => updateForm({ CLO_Domain: e.target.value })}
        />
      </div>
      
        <div className="form-row" >
        
        <input 
           style={{ height: 30, width:80 , marginTop: -30 ,marginLeft:520 }}
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
           style={{ height: 30, width:80 , marginTop: -30 ,marginLeft:620 }}
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
           style={{ height: 30, width:80 , marginTop: -30 ,marginLeft:720 }}
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
           style={{ height: 30, width:80 , marginTop: -30 ,marginLeft:820 }}
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
           style={{ height: 30, width:80 , marginTop: -30 ,marginLeft:920 }}
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
           style={{ height: 30, width:80 , marginTop: -30 ,marginLeft:1020 }}
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
           style={{ height: 30, width:80 , marginTop: -30 ,marginLeft:1120 }}
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
          <Navbar />  <LeftSide_Course />  <CenterClo /> <Bottom />  
   
      </form>
    </div>
  );
}



