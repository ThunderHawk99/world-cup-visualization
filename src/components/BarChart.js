import React from 'react'
import Plot from 'react-plotly.js'
import {features} from '../data/data.json';

const BarChart = () =>{
    const feature = features.map(feature=>{
        return(feature.properties.County);
    })
    const totals = features.map(total=>{
        return(total.properties.Total);
    })
    return(
        <div>
            <Plot
            data={[
                {type: 'bar', marker:{color:'#a50f15'},x: feature, y: totals},
            ]}
            layout={ {width: 600, height: 400, title: 'Total population in each county',plot_bgcolor:"#fffff",paper_bgcolor:"#fffff"} }/>
        </div>
    )
}
export default BarChart