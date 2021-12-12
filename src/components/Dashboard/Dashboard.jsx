import Metrics from '../Metrics/Metric';
import './Dashboard.css';
import { objectData } from '../../assignment_data/data';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  elements: {
    point:{
        radius: 0
    }
  },
};

const labels = objectData.map(item => {
  const date = new Date(item.timestamp);
  const day = date.getDate();
  const month = date.getMonth()+1;
  const year = date.getFullYear();
  return day+"-"+month+"-"+year;
});
export const data = {
  labels,
  datasets: [
    {
      label: 'Anomaly',
      data:objectData.map(item => (item.line_status!=0)?item.original_value:null),
      borderColor: 'rgb(255, 0,0)',
      backgroundColor:'rgba(255, 0,0)',
    },
    {
      label: 'Dataset 1',
      data:objectData.map(item => (item.line_status==3 || item.line_status===0)?item.original_value:null),
      borderColor: 'rgb(0, 0,255)',
      backgroundColor:'rgba(0, 0,255)',
    },
    {
      label: 'Dataset 2',
      data: objectData.map(item => item.min_band),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: objectData.map(item => item.max_band),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 4',
      data: objectData.map(item => item.forecasted_value),
      borderColor: 'rgba(0,0,0, 0.5)',
      backgroundColor: 'rgba(0,0,0, 0.5)',
    }
  ],
};
const Dashboard = (props) => {
  console.log(objectData.filter(item => item.line_status>0 && item.line_status<3).map(item => item.original_value));
  console.log(objectData.map(item => (item.line_status!=0)?item.original_value:null));
  return ( 
    <>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 mx-auto ms-md-5">Data Visualisation </span>
      </div>
    </nav>
    <div className="container" style={{paddingTop:"70px"}}>
      <div className="row mx-3 d-flex justify-content-center" style={{background:"#fff"}}>
        <div className="col-12">
          <h4 className="pt-4 ps-3 pb-2" style={{color:"#333"}}>Metric Data</h4>
        </div>
        <Metrics/>
        <div className="col-12 py-5" style={{marginBottom:"70px"}}>
          <Line options={options} data={data}/>
        </div> 
      </div>
    </div>
    </> 
  );
}


export default Dashboard;