/*import React from 'react'
import Plot from 'react-plotly.js'
import {features} from '../data/data.json';

const PieChartPerCountyGender= () =>{
    const feature = features.map((feature)=>{
        return(feature.properties.County)
    })
    const totals = features.map(total=>{
        return(total.properties.Female);
    })
    const men = features.map(men=>{
        return(men.properties.Male);
    })
    const intersex = features.map(intersex=>{
        return(intersex.properties.Intersex);
    })
    
    
    var data = [
        {
          //values: [112, 454, 65, 544],
          values: totals,
          //labels: ["Blue", "Red", "Yellow", "Orange"],
          labels: feature,
          type: "pie",
        },
      ];
      var data2 = [
        {
          //values: [112, 454, 65, 544],
          values: men,
          //labels: ["Blue", "Red", "Yellow", "Orange"],
          labels: feature,
          type: "pie",
        },
      ];
      var data3 = [
        {
          //values: [112, 454, 65, 544],
          values: intersex,
          //labels: ["Blue", "Red", "Yellow", "Orange"],
          labels: feature,
          type: "pie",
        },
      ];
    
    return(
        <div>
        <Plot
        data={data}
        layout={ {width: 1, height: 500, title: 'Population per county'} } />
        <Plot
        data={data2}
        layout={ {width: 1, height: 500, title: 'Population per county'} } />
        <Plot
        data={data3}
        layout={ {width: 1, height: 500, title: 'Population per county'} } />

        </div>
    )
}
export default PieChartPerCountyGender*/