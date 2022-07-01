import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "./navbar";
import LeftSideSemester from "./LeftSideSemester";
import CenterSemester from "./CenterSemester";
import Bottom from "./Bottom";


export default function Semester_edit() {
  const [form, setForm] = useState({
    Semester_Name: "",
  Semester_Number:"",
   Year:"",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:3000/recordSemester/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/recordListSemester");
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
        Semester_Name: form.Semester_Name,
        Semester_Number: form.Semester_Number,
        Year: form.Year,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/recordListSemester");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:228 }} htmlFor="Semester_Name">Semester Name </label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="text"
            className="form-control"
            id="Semester_Name"
            value={form.Semester_Name}
            onChange={(e) => updateForm({ Semester_Name: e.target.value })}
          />
        </div>
      
      
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Semester_Number">Semester Number </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="text"
            className="form-control"
            id="Semester_Number"
            value={form.Semester_Number}
            onChange={(e) => updateForm({ Semester_Number: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Year">Year </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="Text"
            className="form-control"
            id="Year"
            value={form.Year}
            onChange={(e) => updateForm({ Year: e.target.value })}
          />
        </div>



        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Save" 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSideSemester />  <CenterSemester /> <Bottom />
      </form>
    </div>
  );
}