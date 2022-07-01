import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Bottom from "./Bottom";
import LeftSideTeacher from "./LeftSideTeacher";
import CenterTeacher from "./CenterTeacher";
const Record = (props) => (
  <tr>
    <td>{props.record.ID}</td>
    <td>{props.record.Teacher_Name}</td>
    <td>{props.record.Specialization}</td>
    <td>{props.record.Email}</td>
    <td>{props.record.Phone}</td>
    <td>{props.record.Office_Number}</td>


    <td>
  
    <Link className="btn btn-link" to={`/recordList/`}>Courses</Link> |
      <Link className="btn btn-link" to={`/Semester_edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>


);

export default function RecordListTeacher() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/recordTeacher/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return; 
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:3000/recordTeacher/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function RecordListTeacher() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record}
        />
      );
    });
  }




  // This following section will display the table with the records of individuals.
  return (
    <div>
   
      <table className="table table-striped" style={{  width:1100, marginTop: 220 ,marginLeft:250 }}>
        <thead>
          <tr >
            <th>ID</th>
            <th>Teacher Name</th>
            <th>Specialization </th>
            <th>Email </th>
            <th>Phone </th>
            <th>Office_Number </th>
            <th>Action</th>



          </tr>
        </thead>
        <tbody>{RecordListTeacher()}</tbody>
      </table>
      <Navbar />  <LeftSideTeacher />  <CenterTeacher /> <Bottom />
    </div>

    
  );
}



