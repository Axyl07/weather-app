
export default async function callAPI(location) {
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=T2UVVWT53KJE8WTBH6P4XVRRE&contentType=json`;
  // try {
  const response = await fetch(URL);
  if (response.ok) {
    const responseInJSON = await response.json()
    return responseInJSON;
  }
  throw new Error('Location Not Found')

}