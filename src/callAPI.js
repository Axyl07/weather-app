
export default async function callAPI(location) {
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=T2UVVWT53KJE8WTBH6P4XVRRE&contentType=json`;

  const response = await fetch(URL);
  const responseInJSON = await response.json()
  return responseInJSON;
}
