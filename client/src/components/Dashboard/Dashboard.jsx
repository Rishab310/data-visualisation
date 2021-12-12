import React, { useEffect, useState } from "react";
import Metrics from "../Metrics/Metric";
import "./Dashboard.css";
import { objectData } from "../../assignment_data/data";
import Chart from "../Chart/Chart";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
const Dashboard = (props) => {
  const [metrics, setMetrics] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getMetrics")
      .then((res) => {
        console.log(res);
        setMetrics(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const noOfPages = metrics ? metrics.length : 1;

  return (
    <>
      {metrics.length === 0 ? (
        <div class="text-center">
          <div class="spinner-border text-primary" style={{width:"50px",height:"50px"}} role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1 mx-auto ms-md-5">
                Data Visualisation{" "}
              </span>
            </div>
          </nav>
          <div className="container" style={{ paddingTop: "70px" }}>
            <div
              className="row mx-3 d-flex justify-content-center"
              style={{ background: "#fff" }}
            >
              <div className="col-12">
                <h4 className="pt-4 ps-3 pb-2" style={{ color: "#333" }}>
                  Metric Data
                </h4>
              </div>
              <Metrics metricData={metrics[currentPage - 1]} />
              <Chart metricData={metrics[currentPage - 1]} />
              <Pagination noOfPages={noOfPages} currentPage={currentPage} paginate={paginate}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
