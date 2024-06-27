//Variables
const searchbar = document.querySelector(".searchbar-container");
const profilecontainer = document.querySelector(".profile-container");
const root = document.documentElement.style;
const get = (param) => document.getElementById(`${param}`);
const url = "https://api.github.com/users/";
const noresults = get("no-results");
const btnmode = get("btn-mode");
const modetext = get("mode-text");
const modeicon = get("mode-icon");
const btnsubmit = get("submit");
const input = get("input");
const avatar = get("avatar");
const userName = get("name");
const user = get("user");
const date = get("date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio = get("bio");
const repos = get("repos");
const followers = get("followers");
const following = get("following");
const user_location = get("location");
const page = get("page");
const twitter = get("twitter");
const company = get("company");
let darkMode = false;

// Event Listeners - 4 event listeners lge hue h 
btnsubmit.addEventListener("click", function () {
  if (input.value !== "") {
    getUserData(url + input.value);
  }
});

//agr user enter press kre toh, getuserData function call kr dena
input.addEventListener(
  "keydown", // agr koi v key press hoti h toh keydown event trigger hojaega 
  function (e) {
    if (e.key == "Enter") {
      if (input.value !== "") {
        getUserData(url + input.value);
      }
    }
  },
  false
);

//to hide the no search results when someone starts typing in input area
input.addEventListener("input", function () {
  noresults.style.display = "none";
});

// to enable light and dark mode
btnmode.addEventListener("click", function () {
  if (darkMode == false) {
    darkModeProperties();
  } else {
    lightModeProperties();
  }
});

// Functions

//API CALL
function getUserData(gitUrl) {
  fetch(gitUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateProfile(data);
    })
    .catch((error) => {
      throw error;
    });
}

//asynnc await and fetch then are similar 
//similarity -->
// await , jo isiki line k aage code likha h uska executee nhi hone dega jab tk promise settle nhi hoga
// then kya krta h ki jab tk promise settle nhi hoga tab vo then andar ka code execute nhi hone dega 



//RENDER
function updateProfile(data) {
  if (data.message !== "Not Found") {
    noresults.style.display = "none";
    function checkNull(param1, param2) {
      if (param1 === "" || param1 === null) {
        param2.style.opacity = 0.5;
        param2.previousElementSibling.style.opacity = 0.5;
        return false;
      } else {
        return true;
      }
    }
    avatar.src = `${data.avatar_url}`;
    userName.innerText = data.name === null ? data.login : data.name;
    user.innerText = `@${data.login}`;
    user.href = `${data.html_url}`;
    datesegments = data.created_at.split("T").shift().split("-");
    date.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
    bio.innerText = data.bio == null ? "This profile has no bio" : `${data.bio}`;
    repos.innerText = `${data.public_repos}`;
    followers.innerText = `${data.followers}`;
    following.innerText = `${data.following}`;
    user_location.innerText = checkNull(data.location, user_location) ? data.location : "Not Available";
    page.innerText = checkNull(data.blog, page) ? data.blog : "Not Available";
    page.href = checkNull(data.blog, page) ? data.blog : "#";
    twitter.innerText = checkNull(data.twitter_username, twitter) ? data.twitter_username : "Not Available";
    twitter.href = checkNull(data.twitter_username, twitter) ? `https://twitter.com/${data.twitter_username}` : "#";
    company.innerText = checkNull(data.company, company) ? data.company : "Not Available";
    searchbar.classList.toggle("active");
    profilecontainer.classList.toggle("active");
  } else {
    noresults.style.display = "block";
  }
}



//SWITCH TO DARK MODE - activateDarkMode() - isme global variables ki value change kr di h 
function darkModeProperties() {
  root.setProperty("--lm-bg", "#141D2F");
  root.setProperty("--lm-bg-content", "#1E2A47");
  root.setProperty("--lm-text", "white");
  root.setProperty("--lm-text-alt", "white");
  root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
  modetext.innerText = "LIGHT";
  modeicon.src = "./assets/images/sun-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(1000%)");
  darkMode = true;
  console.log("darkmode changed to " + darkMode);

// stored in local storage so that next time , default mode will be user selected mode only when website starts
  localStorage.setItem("dark-mode", true);  

  console.log("setting dark mode to true");

}

//SWITCH TO LIGHT MODE - activateLightMode()
function lightModeProperties() {
  root.setProperty("--lm-bg", "#F6F8FF");
  root.setProperty("--lm-bg-content", "#FEFEFE");
  root.setProperty("--lm-text", "#4B6A9B");
  root.setProperty("--lm-text-alt", "#2B3442");
  root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
  modetext.innerText = "DARK";
  modeicon.src = "./assets/images/moon-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(100%)");
  darkMode = false;
  console.log("darkmode changed to " + darkMode);

  localStorage.setItem("dark-mode", false);
  console.log("setting dark mode to false");
}


//INITIALISE UI
function init() {
  //initialise dark-mode variable to false;
  //darkMode = true -> dark mode enable karna h 
  //darMode = false -> light mode enable karna h 
  darkMode = false;

  

  const value = localStorage.getItem("dark-mode"); // ye local storage getItem function ek string return krta h , isiiie niche string check kie h 
  // 3 cases possible h ya toh -> true , flase , or null 

  if(value === null) {
    console.log("null k andar");
    localStorage.setItem("dark-mode", darkMode);
    lightModeProperties();
  }
  else if(value == "true") {
    console.log("truer k andar");
    darkModeProperties();
  }
  else if(value == "false") {
    console.log("false k andar");
    lightModeProperties();
  }


  //by default, meri khud ki profile ki   info show krre h UI pr
  getUserData(url + "ankitsinghhh");
}

init();






//hoemwork - //HW
// const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

// solution : -
// window.matchMedia
// window: This refers to the global window object in a web browser environment. The window object represents the browser's window and is the root object from which you can access various properties and methods.
// matchMedia: This is a method of the window object that allows you to test and monitor the state of media queries.
// 2. window.matchMedia("(prefers-color-scheme: dark)")
// This part calls the matchMedia method with the argument "(prefers-color-scheme: dark)".
// The string "(prefers-color-scheme: dark)" is a media query. Media queries are used in CSS to apply styles based on the characteristics of the user's device, such as its screen size or color scheme preference.
// prefers-color-scheme: This media feature is used to detect if the user has requested the system to use a light or dark color theme. It can have two values: light or dark.
// 3. window.matchMedia("(prefers-color-scheme: dark)").matches
// The matchMedia method returns a MediaQueryList object. This object has a matches property.
// The matches property is a boolean that indicates whether the document currently matches the media query string (i.e., if the user prefers a dark color scheme).
// 4. window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
// window.matchMedia && ...: This is a short-circuit evaluation to ensure that window.matchMedia is a valid function before trying to call it. If window.matchMedia is undefined or null, the entire expression will short-circuit and evaluate to false, avoiding a runtime error.
// If window.matchMedia exists, then it proceeds to evaluate window.matchMedia("(prefers-color-scheme: dark)").matches.
// 5. const prefersDarkMode = ...
// This declares a constant variable named prefersDarkMode.
// The value of prefersDarkMode will be true if the user's system preference is for a dark color scheme, and false otherwise.
// Full Explanation
// The entire line of code is checking if the user's device is set to prefer a dark color scheme. It does this by:

// Ensuring that the matchMedia method is available in the window object.
// Using matchMedia to evaluate the media query "(prefers-color-scheme: dark)".
// Assigning the result (true or false) to the prefersDarkMode constant based on whether the media query matches the user's preference.