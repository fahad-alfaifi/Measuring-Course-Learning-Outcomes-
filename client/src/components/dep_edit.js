import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "./navbar";
import LeftSide from "./LeftSide";
import Center from "./Center";
import Bottom from "./Bottom";


export default function Dep_edit() {
  const [form, setForm] = useState({
    Department_Name: "",
    Vision:"",
    Mission:"",
    Values:"",
    Goals:"",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:3000/recordDepartment/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/recordListDepartment");
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
      Department_Name: form.Department_Name,
      Vision: form.Vision,
      Mission: form.Mission,
      Values: form.Values,
      Goals: form.Goals,

    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/recordListDepartment");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:228 }} htmlFor="Department_Name">Department Name Name</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="text"
            className="form-control"
            id="Department_Name"
            value={form.Department_Name}
            onChange={(e) => updateForm({ Department_Name: e.target.value })}
          />
        </div>
      
      
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Vision">Vision </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="text"
            className="form-control"
            id="Vision"
            value={form.Vision}
            onChange={(e) => updateForm({ Vision: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Mission">Mission </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="Text"
            className="form-control"
            id="Mission"
            value={form.Mission}
            onChange={(e) => updateForm({ Mission: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Values">Values </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="Text"
            className="form-control"
            id="Values"
            value={form.Values}
            onChange={(e) => updateForm({ Values: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Goals">Goals </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
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
            value="Save" 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSide />  <Center /> <Bottom />
      </form>
    </div>
  );
}