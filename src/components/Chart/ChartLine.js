import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function App() {
  const [label, setLabel] = useState();
  const [today, setToday] = useState([]);
  const [yesterday, setYesterday] = useState([]);
  
 useEffect(() => {
    axios
      .get("https://private-afe609-testefront.apiary-mock.com/time-data")
      .then(result => {
        setLabel(Object.keys(result.data.today).map(key => result.data.today[key].label));
        setToday(result.data.today.map(today => today.value));
        setYesterday(result.data.yesterday.map(today => today.value));
      });
  }, []);

  return (
    <div>
      <Line
        data={{
          labels: label,
          datasets: [
            {
              label: "Today",
              backgroundColor: "transparent",
              borderColor: "#303F9F",
              borderWidth: 1,
              hoverBackgroundColor: "#303F9F",
              hoverBorderColor: "#303F9F",
              data: today,
              lineTension: 0,
              align: 'end'
            },
            {
              label: "yesterday",
              backgroundColor: "transparent",
              borderColor: "#BF3FFF",
              borderWidth: 1,
              hoverBackgroundColor: "#BF3FFF",
              hoverBorderColor: "#BF3FFF",
              data: yesterday,
              lineTension: 0,
              
            }
          ]
        }}
        options={{
          legend: {
            align: 'end'
          }
        }}
      />
    </div>
  );
}
