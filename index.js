function formatDate(date) {
  let dayIndex = current.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[dayIndex];

let hours = current.getHours();
  if(hours <10 ) {
  hours = `0${hours}`;
  }

let minutes = current.getMinutes();
  if (minutes < 10 ) {
  minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`
}

let currentDate = document.querySelector("li#date");
let current = new Date();
currentDate.innerHTML = formatDate(current);
//challenge 1
function currentTemperature(response) {
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);
}
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityHeading = document.querySelector("#city");
  cityHeading.innerHTML = cityInput.value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(currentTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//challenge 2
function currentButtom(response) {
  console.log(response.data);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity : ${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind  :  ${response.data.wind.speed} km/h`;
}
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(currentButtom);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
let button = document.querySelector("#current");
button.addEventListener("click", getCurrentPosition);
