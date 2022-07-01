import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Bottom from "./Bottom";
import LeftSideSection from "./LeftSideSection";
import CenterSection from "./CenterSection";
const Record = (props) => (
  <tr>
    <td>{props.record.Section_Number}</td>
    <td>{props.record.Academic_Year}</td>
    <td>{props.record.Semester}</td>
    <td>{props.record.Teacher}</td>
    <td>{props.record.Course}</td>
    

    <td>
  
    <Link className="btn btn-link" to={`/ShowMarks/`}>Marks</Link> |
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

export default function RecordListSection() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/recordSection/`);

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
    await fetch(`http://localhost:3000/recordSection/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function RecordListSection() {
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
            <th>Section Number</th>
            <th>Academic Year</th>
            <th>Semester</th>
            <th>Teacher</th>
            <th>Course</th>
            <th>Action</th>


          </tr>
        </thead>
        <tbody>{RecordListSection()}</tbody>
      </table>
      <Navbar />  <LeftSideSection />  <CenterSection /> <Bottom />
    </div>

    
  );
}



