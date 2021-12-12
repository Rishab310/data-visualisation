import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Data Visualisation',
    },
  },
  elements: {
    point:{
        radius: 0
    }
  },
};

const Chart = ({metricData}) => {
  // console.log(metricData);
  const [ objectData, setObjectData] = useState([]);
  useEffect(()=> {
    // console.log("now");
    axios.post("http://localhost:5000/getDataItem", {
        "metricId": metricData? metricData._id : ""
    })
    .then(res => {
      console.log(res.data);
      setObjectData(res.data.metricData);
    })
    .catch(err => console.log(err));
  },[metricData])
  const labels = objectData.map(item => {
    const date = new Date(item.timestamp);
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    return day+"-"+month+"-"+year;
  });
  const data = {
    labels,
    datasets: [
      {
        label: 'Anomaly',
        data:objectData.map(item => (item.line_status!==0)?item.original_value:null),
        borderColor: 'rgb(255, 0,0)',
        backgroundColor:'rgba(255, 0,0)',
      },
      {
        label: 'Original value',
        data:objectData.map(item => (item.line_status===3 || item.line_status===0)?item.original_value:null),
        borderColor: 'rgb(0, 0,255)',
        backgroundColor:'rgba(0, 0,255)',
      },
      {
        label: 'Min-Band',
        data: objectData.map(item => item.min_band),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Max-band',
        data: objectData.map(item => item.max_band),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Forcasted Value',
        data: objectData.map(item => item.forecasted_value),
        borderColor: 'rgba(0,0,0, 0.5)',
        backgroundColor: 'rgba(0,0,0, 0.5)',
      }
    ],
  };
  return (
    <>
      <div className="col-12 py-5">
        <Line options={options} data={data}/>
      </div>
    </>
  );
}

export default Chart;