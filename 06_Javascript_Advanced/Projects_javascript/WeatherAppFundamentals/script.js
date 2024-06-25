
console.log("hello")

// d1845658f92b31c64bd94f06f7188c9c

const API_KEY = "fee513ea9bf03fca2e782696c18d26e6";


async function fetchWeatherDetails() {


     try{
        

        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)



        const data = await response.json() // converting repsonse into json i.e. into object 
        console.log("weather data =>", data);

        renderWeatherInfo(data)
     }
     catch(err){
        console.log(err)
     }
    
  
}

function renderWeatherInfo(data) {
    let newPara = document.createElement('p')
    newPara.textContent = data.main.temp
    document.body.appendChild(newPara)
}


async function getCustomWeather(){
    try{
        let lat = 28.6066259;
        let lon = 78.0601443;
    
        let response =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    
        let data =await response.json();
    
        console.log("weather is =>",data);

    
    
        renderWeatherInfo(data)
    }
    catch(err){
        console.log("Error found hua h mera bhai",err)
    }


}


function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
      else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
      }
  
      // console.log("Current Tab", currentTab);
    }
  }

  // 2 tab h hmare paas - your weather and search weather - starting me hum kisi tab pe honge i.e. current tab and tab we click to go that is called clicked tab


// ye niche ka code location find krne k liye hai , aur ye w3schools se copy paste ki gai h 
  function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);  // ye show position ek callback function hai 
    }
    else {
        console.log("No geoLocation Support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}