import React, { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2'

const PieChart = () => {

  return (
    
    <div className="Pie-chart">
      <Pie
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

export default PieChart