import React from "react";
import Plot from 'react-plotly.js'
import {features} from '../data/data.json';


const GroupedBarChart = () =>{
  let totalmen = 0
  const feature = features.map(feature=>{
    return(feature.properties.County);
    })
    const women = features.map(women=>{
      return(women.properties.Female);
    })
    const men = features.map(men=>{
      return(men.properties.Male);
    })
   const intersex = features.map(intersex=>{
    return(intersex.properties.Intersex);
   })
    var plot1 = {
    x: feature,
    y: men,
    name: "men",
    type: "bar",
    marker:{
      color:"#fee5d9"
    }
  };
  
  var plot2 = {
    x: feature,
    y: women,
    name: "Women",
    type: "bar",
    marker:{
      color:"brown"
    }
  };
  var plot3 = {
    x: feature,
    y: intersex,
    name: "Intersex",
    type: "bar",
    marker:{
      color:"orange"
    }
  };
  
  var data = [plot1, plot2, plot3];
      return(
        <Plot
        data={data}
        layout={ {width: 600, height: 400, title: 'Gender population per county', plot_bgcolor:"#fffff",paper_bgcolor:"#fffff"} } />
      )
  }


  export default GroupedBarChart