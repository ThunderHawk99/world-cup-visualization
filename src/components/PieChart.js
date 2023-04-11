/*import React from 'react'
import Plot from 'react-plotly.js'
import {features} from '../data/data.json';




  
const PieChart = () =>{
  const feature = features.map(feature=>{
    return(feature.properties.County);
  })
  const totals = features.map(total=>{
    return(total.properties.Total);
  })
    var data = [
      {
        values: totals,
        labels: feature,
        type: "pie",
      },
    ];
  
      return(
          <Plot
        data={data}
        layout={ {width: 1, height: 500, title: 'Population per county'} } />
      
      )
  }

  export default PieChart*/