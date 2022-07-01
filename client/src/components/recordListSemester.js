import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import LeftSide from "./LeftSide";
import CenterSemester from "./CenterSemester";
import Bottom from "./Bottom";
import LeftSideSemester from "./LeftSideSemester";


const Record = (props) => (
  <tr>
    <td>{props.record.Semester_Number}</td>
    <td>{props.record.Year}</td>
   
    <td>
  
    <Link className="btn btn-link" to={`/recordListTeacher/`}>Teacher</Link> |

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

export default function RecordListSemester() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/recordSemester/`);

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
    await fetch(`http://localhost:3000/recordSemester/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function RecordListSemester() {
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
            <th>Semester Number</th>
            <th>Year </th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>{RecordListSemester()}</tbody>
      </table>
      <Navbar />  <LeftSideSemester />  <CenterSemester /> <Bottom />
    </div>

    
  );
}



