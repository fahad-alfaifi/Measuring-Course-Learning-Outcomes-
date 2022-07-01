import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  
  const Record = (props) => (
  
  props.record.ID,
  props.record.Assign1,
  props.record.Assign2, 
  props.record.Quiz1 ,
  props.record.Quiz2,
  props.record.Mid1,
  props.record.Mid2,
  props.record.Final
);
 
  const [records, setRecords] = useState([]);
 
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/recordMarks/`);

      const records = await response.json();
      setRecords(records);
    }

    getRecords();
    return; 
  }, [records.length]);

  
  return (
    
    <div className="Bar-chart">
      <Bar
        data={{ 
          labels: ['1.1','1.2','2.1', '2.2'],
          datasets: [
            {
              label: '# of votes',
              data: [3.67,3.43,4,3.30],
           
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
 
          ],
        }}
   
        
        options={{
    
          maintainAspectRatio: false,
       
          legend: {
            labels: {
              fontSize: 15
            ,
              
            },
          },
        }}
      />
      
    </div>
  )

}

export default BarChart