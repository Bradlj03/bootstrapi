
// dogImg
// newDogButton
// center
// cityForm
// inputCity
// currentWeather
// city
// temperature
// wind
// description

const dogImg = document.querySelector("#dogImg");

const newDogButton = document.querySelector("#newDogButton");

newDogButton.style.justifySelf = "center";

const cityForm = document.querySelector("#cityForm");

const inputCity = document.querySelector("#inputCity");

const currentWeather = document.querySelector("#currentWeather");

const city = document.querySelector("#city");

const temperature = document.querySelector("#temperature");

const wind = document.querySelector("#wind");

const description = document.querySelector("#description");

//Step 1  Make API request
// fetch is a function that takes in a endpoint URL and makes a request to it.

// fetch returns a PROMISE
// A Promise is an object that representing the eventual completion/failure of an 
// asychronous function
// Fetch is a asychronous funtion which means that although we are waiting 
//on it to return a response, this will not prevent further code below to continue running
// returns a raw http response.

//! Step 1: make an API request
console.log('Step 1 Make API request')
// create a event listener that clicks and then runs a funcyio
newDogButton.addEventListener("click", function () {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then(function (httpResponse) {
			console.log('Step 2 get HTTP Response')
			return httpResponse.json();
		})
		
		.then(function (data) {
			console.log('Step 3 Parse data received fromAPI')
			console.log(data.message);
			newImg = dogImg.src = data.message;
			return newImg;
		});
});

//use a submit event lister . This will allow you to submit the information. 

cityForm.addEventListener("submit", function (event) {
	event.preventDefault();

	let str = inputCity.value;
	fetch(`https://goweather.herokuapp.com/weather/${str}`)
		
		.then(function (httpResponse) {
			return httpResponse.json();
		})
		// ? Handle the response bady data
		.then(function (data) {
			city.innerHTML = `Current weather in '<b>${str}</b>':`;
			temperature.innerHTML = `Temperature: <b>${data.temperature}</b>`;
			wind.innerHTML = `Wind: <b>${data.wind}`;
			description.innerHTML = `Description: <b>${data.description}</b>`;

			currentWeather.style = `
            margin-top: 25px;
            padding: 25px;
            background-color: white;
            padding-left: 25px;
            border-radius: 25px;`;
		});
	cityForm.reset();
});