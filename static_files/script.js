const app = document.getElementById('searchOptions');
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

//http://magicseaweed.com/api/797022276644-6ludpo55lhr67659aqrvu678sftkevis.apps.googleusercontent.com/forecast/?spot_id=10
request.open('GET', 'http://api.spitcast.com/api/county/spots/san-diego/', true);
request.responseType = 'text';

request.onload = function () {
	var data = JSON.parse(this.responseText);
	data.forEach(beach => {
		console.log("spot:", beach.spot_name);
		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		const h1 = document.createElement('h1');
		h1.textContent = beach.spot_name;

		card.appendChild(h1);
		app.appendChild(card);
	})
}
request.send();
