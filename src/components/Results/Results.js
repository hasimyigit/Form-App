import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend,Title);

const Results = () => {
  const { result } = useSelector((state) => state);
 

 
   const options =  {
   
    maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
         
        },
        title: {
          display: true,
          text: `Katılımcı sayısı ${result.userCount}`,
        },
      },
    }
 
   const data  = {
      labels: result.labels,
      datasets: [
        {
          label: "# of Votes",
          data: result.data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    }
 

  return (
    <div className="overflow-auto" style={{height:"60vh"}}>
     
        
         
          <Pie data={data}   options={options}   />
       
     
    </div>
  );
};

export default Results;
