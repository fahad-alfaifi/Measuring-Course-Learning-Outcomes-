import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import CenterPrograms from "./CenterPrograms";
import Bottom from "./Bottom";
import LeftSidePrograms from "./LeftSidePrograms";


const Record = (props) => (
  <tr>
    <td>{props.record.Programs_Name}</td>
    <td>{props.record.Programs_mission}</td>
    <td>{props.record.Objectves}</td>
    <td>{props.record.Description}</td>
    <td>{props.record.Learing_Outcomes}</td>
    <td>{props.record.Plan_hours}</td>

    <td>
    <Link className="btn btn-link" to={`/recordListSemester/`}>Semester</Link> |

      <Link className="btn btn-link" to={`/Programes_edit/${props.record._id}`}>Edit</Link> |
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

export default function RecordListPrograms() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/recordPrograms/`);

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
    await fetch(`http://localhost:3000/recordPrograms/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function RecordListPrograms() {
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
            <th>Programs Name</th>
            <th>Programs Mission</th>
            <th>Objectves  </th>
            <th>Description</th>
            <th>Learing Outcomes</th>
            <th>Plan hurs</th>
            <th>Action</th>


          </tr>
        </thead>
        <tbody>{RecordListPrograms()}</tbody>
      </table>
      <Navbar />  <LeftSidePrograms />  <CenterPrograms /> <Bottom />
    </div>

    
  );
}



