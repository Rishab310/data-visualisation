const Metrics = ({metricData}) => {
  const metric = {
    "_id": "60508885da4c96019c357c19_f79e329cf4d13e3613d5a690ef19bfe9",
    "measure": "revenue",
    "dimensions": [
      {
        "name": "country",
        "value": "USA"
      },
      {
        "name": "productfamily",
        "value": "Shoes"
      },
      {
        "name": "devicetype",
        "value": "Mobile"
      },
      {
        "name": "os",
        "value": "iOS"
      }
    ]
  }
  return (
    <>
      <div className="col-12 mb-2">
        <span className="ps-4 field">Measure : </span><span className="details">{metricData && metricData.measure}</span>
      </div>
      <div className="col-12 mb-2">
        <div className="ps-4">
          <span className="field">Dimensions : </span> <br />
          <div className="row d-flex justify-content-between ps-2">
          {
            metricData && metricData.dimensions.map((item, index) => {
              return (
                <div key={index} className='col-12 col-md-3 pe-3 dimensions'>
                  <span className='field'>{item.name + " : "}</span> <span className='details'>{item.value}</span>
                </div>
              );
            })
          }
          </div>
        </div>
      </div>
    </>
  );

}

export default Metrics;