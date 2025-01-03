
import callAPI from "./callAPI";

import "./index.css";


const goButton = document.querySelector("#go");
goButton.addEventListener("click", (event) => {
  const locationInputValue = document.querySelector("#locationInput").value;
  if (locationInputValue!='') {
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
      currentTempDiv.textContent = 'Current Temperature : ' + createdDataObject.currenttemp + ' ℃';
      currentTempDiv.style.display = 'flex'
      if (createdDataObject.currenttemp <= 20) {
        currentTempDiv.style.background = `radial-gradient(
      circle,
      rgba(63, 251, 173, 1) 0%,
      rgba(0, 224, 250, 1) 100%
    )`;
      } else {
        currentTempDiv.style.background = `radial-gradient(circle, rgba(255,0,0,0.7371323529411764) 14%, rgba(245,255,0,1) 100%)`;
      }
      maxTempDiv.textContent = 'Max Temperature : ' + createdDataObject.hightemp + ' ℃';
      maxTempDiv.style.display = 'flex'
      if (createdDataObject.hightemp <= 20) {
        maxTempDiv.style.background = `radial-gradient(
      circle,
      rgba(63, 251, 173, 1) 0%,
      rgba(0, 224, 250, 1) 100%
    )`;
      } else {
        maxTempDiv.style.background = `radial-gradient(circle, rgba(255,0,0,0.7371323529411764) 14%, rgba(245,255,0,1) 100%)`;
      }
      minTempDiv.textContent = 'Min Temperature : ' + createdDataObject.lowtemp + ' ℃';
      minTempDiv.style.display = 'flex'
      if (createdDataObject.lowtemp <= 20) {
        minTempDiv.style.background = `radial-gradient(
      circle,
      rgba(63, 251, 173, 1) 0%,
      rgba(0, 224, 250, 1) 100%
    )`;
      } else {
        minTempDiv.style.background = `radial-gradient(circle, rgba(255,0,0,0.7371323529411764) 14%, rgba(245,255,0,1) 100%)`;
      }
      windSpeed.textContent = 'Wind Speed : ' + createdDataObject.wind + ' kmph';
      windSpeed.style.display = 'flex'
      description.textContent = ' ' + createdDataObject.description;
      description.style.display = 'flex'
      const errorDiv = document.querySelector('.error');
      errorDiv.textContent = `${locationInputValue}'s Weather Information:`;
    }).catch((e) => {
      const errorDiv = document.querySelector('.error');
      console.log(e)
      errorDiv.textContent = e;
      const currentTempDiv = document.querySelector(".currentTempDiv");
      const maxTempDiv = document.querySelector(".maxTempDiv");
      const minTempDiv = document.querySelector(".minTempDiv");
      const windSpeed = document.querySelector(".windSpeed");
      const description = document.querySelector(".description");
      currentTempDiv.style.display = 'none'
      minTempDiv.style.display = 'none'
      maxTempDiv.style.display = 'none'
      windSpeed.style.display = 'none'
      description.style.display = 'none'
    })
    event.preventDefault();
  } else {
    const errorDiv = document.querySelector('.error');
    errorDiv.textContent = 'Please enter a location'
  }
});
