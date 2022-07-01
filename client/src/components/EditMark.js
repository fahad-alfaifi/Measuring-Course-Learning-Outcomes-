import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "./navbar";
import Center from "./Center";
import Bottom from "./Bottom";
import LeftSide_Course from "./LeftSide_Course";


export default function EditMark() {
  const [form, setForm] = useState({
    ID: "",
    Assign1: "",
    Assign2: "",
    Quiz1: "",
    Quiz2: "",
    Mid1: "",
    Mid2: "",
    Final: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:3000/recordMarks/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`record with id ${id} not found`);
        navigate("/ShowMarks");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
        ID: form.ID,
        Assign1: form.Assign1,
        Assign2: form.Assign2,
        Quiz1: form.Quiz1,
        Quiz2: form.Quiz2,
        Mid1: form.Mid1,
        Mid2: form.Mid2,
        LAB: form.LAB,
        Final: form.Final,
      
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/ShowMarks");
  }



  // This following section will display the form that takes input from the user to update the data.
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
          onChange={(e) => updateForm({ ID: e.target.value })}
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
        onChange={(e) => updateForm({ Assign1: e.target.value })}
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
        onChange={(e) => updateForm({ Assign2: e.target.value })}
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
        onChange={(e) => updateForm({ Quiz1: e.target.value })}
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
        onChange={(e) => updateForm({ Quiz2: e.target.value })}
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
        onChange={(e) => updateForm({ Mid1: e.target.value })}
      />
    </div>

    <div className="form-row" >
      
      <input 
         style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:980 }}
        type="number"
        className="form-control"
        id="Mid2"
        placeholder="Mid2"
        value={form.Mid2}
        onChange={(e) => updateForm({ Mid2: e.target.value })}
      />
    </div>

     <div className="form-row" >
      
      <input 
         style={{ height: 30, width:100 , marginTop: -30 ,marginLeft:980 }}
        type="number"
        className="form-control"
        id="LAB"
        placeholder="LAB"
        value={form.LAB}
        onChange={(e) => updateForm({ LAB: e.target.value })}
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
        onChange={(e) => updateForm({ Final: e.target.value })}
      />
    </div>

    
   

      <div className="form-row">
        <input
          type="submit"
          value="Save" 
          className="AddMarks-Button"

        />
        
      </div>    <Navbar />  <LeftSide_Course />  <Center /> <Bottom />  
       
    </form>
  </div>
  );
}