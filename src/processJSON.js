import callAPI from "./callAPI";
export default function processJSON(location) {
    const receivedJSON = callAPI(location);
    const dataObject = {
        currenttemp: receivedJSON.days[0].temp,
        hightemp: receivedJSON.days[0].tempmax,
        lowtemp: receivedJSON.days[0].tempmin,
        wind: receivedJSON.days[0].windspeed,
        description: receivedJSON.description
    }
    return dataObject;
}