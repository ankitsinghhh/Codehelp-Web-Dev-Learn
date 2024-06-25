const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//  needed variables initialisation
const API_KEY = "fee513ea9bf03fca2e782696c18d26e6";
let oldTab = userTab //suru me current Tab  , user tab hoga
oldTab.classList.add("current-tab")
getfromSessionStorage();



userTab.addEventListener("click",() =>{
    //pass clicked Tab as input
    switchTab(userTab)
}) //agr userTab pe click hogi toh switchtab function call hoga with userTab as parameter


/
searchTab.addEventListener("click",() =>{
    //pass clicked Tab as input
    switchTab(searchTab)
}) //agr searchTab pe click hogi toh switchtab function call hoga with searchTab as parameter

// function to switch the current tab to clickedTab when it is clicked
function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

//it checks if coordinates are already present in the local storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        //agr local coordinates nhi mile 
        grantAccessContainer.classList.add("active")
    }
    else{
        //get local coordinates 
        const coordinates = JSON.parse(localCoordinates); //converting into json format from local coordinates
        fetchUserWeatherInfo(coordinates)
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;

    // make grantcontainer invisble 
    grantAccessContainer.classList.remove("active");
   
    //make loading screen visible
    loadingScreen.classList.add("active");

    //API call
    try {
        //fetching weather data from API
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );

        const  data = await response.json(); //covnerting response into json

        // jab data aajae tb loader ko htado
        loadingScreen.classList.remove("active");
        
        // making userInfocontainer visible
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }
    
   

    
}

function renderWeatherInfo(weatherInfo){
    // firstly we have to fetch the elements

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

     //fetch values from weatherINfo object and put it UI elements
     cityName.innerText = weatherInfo?.name;
     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
     desc.innerText = weatherInfo?.weather?.[0]?.description;
     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
     temp.innerText = weatherInfo?.main?.temp;
     windspeed.innerText = weatherInfo?.wind?.speed;
     humidity.innerText = weatherInfo?.main?.humidity;
     cloudiness.innerText = weatherInfo?.clouds?.all;

}




const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);


function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition); //this showpostion is callback funtion
    }
    else {
        //HW - show an alert for no gelolocation support available
        alert('Geolocation support not available')
    }
}

function showPosition(position) {

    const userCoordinates = {//finding latitude and longitude using geolocation API
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));  //storing the coordinates in session storage with the name "user-coordinates"
    fetchUserWeatherInfo(userCoordinates);

}

// for  - search Tab 

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}