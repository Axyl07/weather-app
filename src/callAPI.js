
export default async function callAPI(location) {
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=T2UVVWT53KJE8WTBH6P4XVRRE&contentType=json`;
  const response = await fetch(URL);
  const json = await response.json()
  console.log("whole data"+json);
  console.log("current temp"+json.days[0].temp);
  console.log("max temp"+json.days[0].tempmax);
  console.log("min temp"+json.days[0].tempmin);
  console.log("windspeed"+json.days[0].windspeed);
  console.log("description"+json.description);
  return json;
}
