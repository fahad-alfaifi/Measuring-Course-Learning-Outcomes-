import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import LeftSide from "./LeftSide";
import CenterCollege from "./CenterCollege";
import Bottom from "./Bottom";
import LeftSide_College from "./LeftSide_College";


const Record = (props) => (
  <tr>
    <td>{props.record.College_Name}</td>
    <td>{props.record.Vision}</td>
    <td>{props.record.Mission}</td>
    <td>{props.record.Values}</td>
    <td>{props.record.Goals}</td>
    <td>
  
    <Link className="btn btn-link" to={`/recordListDepartment/`}>Department</Link> |
      <Link className="btn btn-link" to={`/College_Edit/${props.record._id}`}>Edit</Link> |
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

export default function Collegelist() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/recordColleges/`);

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
    await fetch(`http://localhost:3000/recordColleges/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function collegelist() {
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
            <th>College Name</th>
            <th>Vision</th>
            <th>Mission </th>
            <th>Values </th>
            <th>Goals </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{collegelist()}</tbody>
      </table>
      <Navbar />  <LeftSide_College />  <CenterCollege /> <Bottom />
    </div>

    
  );
}



