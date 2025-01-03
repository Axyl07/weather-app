
import callAPI from "./callAPI";

import "./index.css";


const goButton = document.querySelector("#go");
goButton.addEventListener("click", (event) => {
  const locationInputValue = document.querySelector("#locationInput").value;
  callAPI(locationInputValue).then(dataObject => {
    const createdDataObject = {
            currenttemp: dataObject.days[0].temp,
            hightemp: dataObject.days[0].tempmax,
            lowtemp: dataObject.days[0].tempmin,
            wind: dataObject.days[0].windspeed,
            description: dataObject.days[0].description,
          };
    console.log(createdDataObject);
    console.log(`for ${locationInputValue}:`);
    console.log("current temp " + createdDataObject.currenttemp);
    console.log("max temp " + createdDataObject.hightemp);
    console.log("min temp " + createdDataObject.lowtemp);
    console.log("windspeed " + createdDataObject.wind);
    console.log("description " + createdDataObject.description);
    const currentTempDiv = document.querySelector(".currentTempDiv");
    const maxTempDiv = document.querySelector(".maxTempDiv");
    const minTempDiv = document.querySelector(".minTempDiv");
    const windSpeed = document.querySelector(".windSpeed");
    const description = document.querySelector(".description");
  
    // FIll UI
    currentTempDiv.textContent ='Current Temperature : '+ createdDataObject.currenttemp+' degree Celcius';
    maxTempDiv.textContent ='Max Temperature : '+ createdDataObject.hightemp+' degree Celcius';
    minTempDiv.textContent ='Min Temperature : '+ createdDataObject.lowtemp+' degree Celcius';
    windSpeed.textContent ='Wind Speed : '+ createdDataObject.wind+' kmph';
    description.textContent = ' ' + createdDataObject.description;
    const errorDiv = document.querySelector('.error');
    errorDiv.textContent = '';
  }).catch((e) => {
    const errorDiv = document.querySelector('.error');
    console.log(e)
    errorDiv.textContent = e;
  })
  event.preventDefault();
});
