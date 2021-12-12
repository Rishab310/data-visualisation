import Metrics from '../Metrics/Metric';
import './Dashboard.css';

const Dashboard = (props) => {

  return ( 
    <>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 mx-auto ms-md-5">Data Visualisation Dashboard</span>
      </div>
    </nav>
    <div className="container" style={{paddingTop:"100px"}}>
      <div className="row mx-3" style={{background:"#fff"}}>
        <div className="col-12">
          <h4 className="pt-4 ps-3 pb-2" style={{color:"#333"}}>Metric Data</h4>
        </div>
        <Metrics/>
        <div className="col-12">
        </div> 
      </div>
    </div>
    </> 
  );
}

export default Dashboard;