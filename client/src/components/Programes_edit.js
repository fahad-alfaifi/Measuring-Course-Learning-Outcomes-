import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "./navbar";
import LeftSidePrograms from "./LeftSidePrograms";
import CenterPrograms from "./CenterPrograms";
import Bottom from "./Bottom";


export default function Programes_edit() {
  const [form, setForm] = useState({
    Programs_Name: "",
    Description: "",
    Plan_hours: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:3000/recordPrograms/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/recordListPrograms");
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
        Programs_Name: form.Programs_Name,
        Description: form.Description,
        Plan_hours: form.Plan_hours,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/recordListPrograms");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:228 }} htmlFor="Programs_Name">Programs Name </label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="text"
            className="form-control"
            id="Programs_Name"
            value={form.Programs_Name}
            onChange={(e) => updateForm({ Programs_Name: e.target.value })}
          />
        </div>
      
      
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Description">Description </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="number"
            className="form-control"
            id="Description"
            value={form.Description}
            onChange={(e) => updateForm({ Description: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Plan_hours">Plan hours </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="Text"
            className="form-control"
            id="Plan_hours"
            value={form.Plan_hours}
            onChange={(e) => updateForm({ Plan_hours: e.target.value })}
          />
        </div>



        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Save" 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSidePrograms />  <CenterPrograms /> <Bottom />
      </form>
    </div>
  );
}