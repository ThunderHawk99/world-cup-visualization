import gdp_data from "../data/gdp.json";
export function getGdpByCountry(name, iso_a3) {
  const data = gdp_data.find(obj => obj.economy === iso_a3)
  return data
}
