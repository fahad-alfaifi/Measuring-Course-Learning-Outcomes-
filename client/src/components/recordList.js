import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import LeftSide from "./LeftSide";
import Center from "./Center";
import Bottom from "./Bottom";


const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.Section_Number}</td>
    <td>{props.record.Teacher_Name}</td>
    <td>{props.record.Description}</td>
    <td>{props.record.Objectives}</td>
    <td>{props.record.Topics}</td>
    <td>{props.record.TextbBook}</td>


    <td>
    <Link className="btn btn-link" to={`/recordListSection/`}>Section</Link> |
      <Link className="btn btn-link" to={`/Edit_Course/${props.record._id}`}>Edit </Link> |
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

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/record/`);

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
    await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
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
            <th>Courses Name</th>
            <th>Section  number</th>
            <th>Teacher name </th>
            <th>Description </th>
            <th>Objectives </th>
            <th>Topics </th>
            <th>TextbBook </th>



            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
      <Navbar />  <LeftSide />  <Center /> <Bottom />
    </div>

    
  );
}



