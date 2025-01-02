
export default async function callAPI(location) {
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=T2UVVWT53KJE8WTBH6P4XVRRE&contentType=json`;
  const response = await fetch(URL);
  const responseInJSON = await response.json()
  const dataObject = {
    currenttemp: responseInJSON.days[0].temp,
    hightemp: responseInJSON.days[0].tempmax,
    lowtemp: responseInJSON.days[0].tempmin,
    wind: responseInJSON.days[0].windspeed,
    description: responseInJSON.days[0].description
}
  console.log(responseInJSON);
  console.log("current temp "+dataObject.currenttemp);
  console.log("max temp "+dataObject.hightemp);
  console.log("min temp "+dataObject.lowtemp);
  console.log("windspeed "+dataObject.wind);
  console.log("description "+dataObject.description);
  return dataObject;
}
