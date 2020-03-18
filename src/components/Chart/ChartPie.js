import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

export default function ChartPie () {
  const [label, setLabel] = useState([]);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://private-afe609-testefront.apiary-mock.com/anual-percentage")
      .then(result => {
        setLabel(Object.keys(result.data).map(key => result.data[key].label));
        setData(Object.keys(result.data).map(key => result.data[key].value));
        console.log(data);
      });
  }, [data]);

  return (
    <div>
      <Pie data={{
        labels: label,
        datasets: [
          {
            label: 'Pie Chart',
            backgroundColor: ['#2C82BE', '#DBECF8', '#32B88B'],
            borderColor: 'transparent',
            borderWidth: 1,
            hoverBackgroundColor: ['#2C82BE', '#DBECF8', '#32B88B'],
            hoverBorderColor: ['#2C82BE', '#DBECF8', '#32B88B'],
            data: data
          }
        ]
      }}
      options={{
        legend: {
          align: 'end'
        }
      }} />
    </div>
  );
}



