import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "./navbar";
import LeftSide from "./LeftSide";
import Center from "./Center";
import Bottom from "./Bottom";


export default function Edit_Course() {
  const [form, setForm] = useState({
    name: "",
    Section_Number: "",
    Teacher_Name: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:3000/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/recordList");
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
      name: form.name,
      Section_Number: form.Section_Number,
      Teacher_Name: form.Teacher_Name,
      Description: form.Description,
      Objectives: form.Objectives,
      Topics: form.Topics,
      TextbBook: form.TextbBook,


    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/recordList");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:250 }} htmlFor="name">Courses Name</label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
      
      
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Section_Number">Course Code</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Section_Number"
            value={form.Section_Number}
            onChange={(e) => updateForm({ Section_Number: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Teacher_Name">Hours</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Teacher_Name"
            value={form.Teacher_Name}
            onChange={(e) => updateForm({ Teacher_Name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Description">Description</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Description"
            value={form.Description}
            onChange={(e) => updateForm({ Description: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Objectives">Objectives</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Objectives"
            value={form.Objectives}
            onChange={(e) => updateForm({ Objectives: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="Topics">Topics</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="Topics"
            value={form.Topics}
            onChange={(e) => updateForm({ Topics: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:250 }}  htmlFor="TextbBook">TextbBook</label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:370 }}
            type="Text"
            className="form-control"
            id="TextbBook"
            value={form.TextbBook}
            onChange={(e) => updateForm({ TextbBook: e.target.value })}
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