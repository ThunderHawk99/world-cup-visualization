import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import { features } from "../data/countries.json";
import { getGdpByCountry } from "../services/gdp";
import GroupedBarChart from "./GroupedBarChart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Map.css";

const Map = () => {
  const [onselect, setOnselect] = useState({});
  const [lineChartData, setLineChartData] = useState(null);
  const [keys, setKeys] = useState(null);

  const testData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const onclick = (e) => {
    const country = e.target.feature.properties.ADMIN;
    const iso_a3 = e.target.feature.properties.ISO_A3;
    const data = getGdpByCountry(country, iso_a3);
    if (data) {
      delete data.economy;
      delete data.Country;
      console.log(data);
      setLineChartData(data);
    }
  };

  const highlightFeature = (e) => {
    var layer = e.target;
    layer.setStyle({
      weight: 1,
      color: "black",
      fillOpacity: 1,
    });
  };
  const resetHighlight = (e) => {
    setOnselect({});
    e.target.setStyle(style(e.target.feature));
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: onclick,
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  };

  const feature = features.map((feature) => {
    return feature;
  });

  const mapPolygonColorToDensity = (density) => {
    return density > 3023
      ? "#a50f15"
      : density > 676
      ? "#de2d26"
      : density > 428
      ? "#fb6a4a"
      : density > 236
      ? "#fc9272"
      : density > 23
      ? "#fcbba1"
      : "#fee5d9";
  };
  const style = (feature) => {
    return {
      fillColor: mapPolygonColorToDensity(feature.properties.Desnity),
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "2",
      fillOpacity: 0.7,
    };
  };
  const highlightStyle = (feature) => {
    return {
      // fillColor: mapPolygonColorToDensity(feature.properties.Desnity),
      fillColor: "yellow",
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "2",
      fillOpacity: 0.7,
    };
  };
  const mapStyle = {
    height: "100vh",
    width: "100%",
    //margin: '0 auto',
  };
  return (
    <div className="con">
      <div className="row">
        <div className="col-8" id="col">
          <div className="map">
            <div className="hover">
              <MapContainer
                center={[40, 0]}
                zoom={2}
                scrollWheelZoom={true}
                style={mapStyle}
              >
                <TileLayer
                  attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                  url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                />
                {feature && (
                  <GeoJSON
                    data={feature}
                    style={style}
                    onEachFeature={onEachFeature}
                  />
                )}
              </MapContainer>
            </div>
          </div>
        </div>
        <div className="col-4" id="col-sm">
          {/* <div>
                    {!onselect.county && (
                        <Plot  
                        data={data1}
                        layout={ {width: 600, height: 400, title: 'Total population in the Country', plot_bgcolor:"v",paper_bgcolor:"#fffff"}}/>
                    )}
                    {onselect.county && (
                        <Plot
                        data={data}
                        layout={ {width: 600, height: 400, title: onselect.county, plot_bgcolor:"#fffff",paper_bgcolor:"#fffff"} } />
                    )}
                </div> */}
          <div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={testData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <GroupedBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Map;
