import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "./navbar";
import LeftSideAcademic from "./LeftSideAcademic";
import CenterAcademic from "./CenterAcademic";
import Bottom from "./Bottom";


export default function Edit_Course() {
  const [form, setForm] = useState({
    Academic_Care_Name: "",
   ID:"",
   Email:"",
   Phone:"",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:3000/recordAcademic/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/recordListAcademic");
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
        Academic_Care_Name: form.Academic_Care_Name,
        ID: form.ID,
        Email: form.Email,
        Phone: form.Phone,

    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/recordListAcademic");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div> 
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <label style={{ marginTop: 220 ,marginLeft:228 }} htmlFor="Academic_Care_Name">Academic Care Name </label>
          <input 
          style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="text"
            className="form-control"
            id="Academic_Care_Name"
            value={form.Academic_Care_Name}
            onChange={(e) => updateForm({ Academic_Care_Name: e.target.value })}
          />
        </div>
      
      
        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="ID">ID </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="number"
            className="form-control"
            id="ID"
            value={form.ID}
            onChange={(e) => updateForm({ ID: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Email">Email </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="Text"
            className="form-control"
            id="Email"
            value={form.Email}
            onChange={(e) => updateForm({ Email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: 15 ,marginLeft:228 }}  htmlFor="Phone">Phone </label>
          <input
           style={{ height: 28, width: 305, marginTop: -23 ,marginLeft:350 }}
            type="number"
            className="form-control"
            id="Phone"
            value={form.Phone}
            onChange={(e) => updateForm({ Phone: e.target.value })}
          />
        </div>



        <div className="form-group">
          <input
           style={{  width: 150, marginTop: 20 ,marginLeft:420 }}
            type="submit"
            value="Save" 
            className="btn btn-success"
          />
        </div>      <Navbar />  <LeftSideAcademic />  <CenterAcademic /> <Bottom />
      </form>
    </div>
  );
}