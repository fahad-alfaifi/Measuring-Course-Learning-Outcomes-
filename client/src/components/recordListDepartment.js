import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import LeftSideDepartment from "./LeftSideDepartment";
import Bottom from "./Bottom";
import CenterDepartment from "./CenterDepartment";


const Record = (props) => (
  <tr>
 
    
   
    <td>{props.record.Department_Name}</td>
    <td>{props.record.Vision}</td>
    <td>{props.record.Values}</td>
    <td>{props.record.Goals}</td>
  
    <td>
    <Link className="btn btn-link" to={`/recordListPrograms/`}>Programs</Link> |

    <Link className="btn btn-link" to={`/dep_edit/${props.record._id}`}>Edit </Link> |

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

export default function RecordListDepartment() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/recordDepartment/`);

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
    await fetch(`http://localhost:3000/recordDepartment/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function RecordListDepartment() {
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
          
          <th>Department Name</th>
            <th>Vision</th>
            <th>Values </th>
            <th>Goals </th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>{RecordListDepartment()}</tbody>
      </table>
      <Navbar />  <LeftSideDepartment />  <CenterDepartment /> <Bottom />
    </div>

    
  );
}



