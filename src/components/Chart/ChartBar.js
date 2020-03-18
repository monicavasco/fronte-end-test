import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export default function ChartBar () {
  const [label, setLabel] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://private-afe609-testefront.apiary-mock.com/anual-result")
      .then(result => {
        setLabel(Object.keys(result.data).map(key => result.data[key].label));
        setData(Object.keys(result.data).map(key => result.data[key].value));
        console.log(data);
      });
  }, [data]);

  return (
    <div>
      <Bar data={{
        labels: label,
        datasets: [
          {
            label: '',
            backgroundColor: '#03A9F4',
            borderWidth: 1,
            hoverBackgroundColor: '#03A9F4',
            hoverBorderColor: '#03A9F4',
            data: data
          }
        ]
      }}
      options={{
        legend: {
          display: false
        }
      }}
       />
    </div>
  );
}



