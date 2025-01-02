import callAPI from './callAPI';
import "./index.css";
// callAPI('london');



// import processJSON from "./processJSON";
// console.log(processJSON('delhi'));
  // const form = document.querySelector(form);
  const goButton = document.querySelector("#go");
  goButton.addEventListener("click", (event) => {
    const locationInputValue = document.querySelector("#locationInput").value;
    console.log("testin");
    console.log(locationInputValue);
    console.log(`for ${locationInputValue} data is`+callAPI(locationInputValue));
    event.preventDefault();
  });


