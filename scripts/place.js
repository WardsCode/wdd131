
const year = document.querySelector("#currentYear");
const lastm = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const date = new Date(document.lastModified);
lastm.innerHTML = `<span class="highlight">${date}</span>`;


/**/


let temperature = 20;
let windspeed = 6;
const chill = document.querySelector("#windchill");

if (temperature <= 50 && windspeed > 3 ){

    chill.innerHTML = `<span class="windchill"> ${calculateWindChill(temperature,windspeed)}</span>`;
    function calculateWindChill(temperature,windspeed){
            return (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed , 0.16)) + (0.4275 * temperature * Math.pow(windspeed,0.16))).toFixed(2);
    }
} else {
    chill.innerHTML = "No Valid";
}




