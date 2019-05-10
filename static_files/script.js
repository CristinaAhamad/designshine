const app = document.getElementById('searchOptions');
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

//http://magicseaweed.com/api/797022276644-6ludpo55lhr67659aqrvu678sftkevis.apps.googleusercontent.com/forecast/?spot_id=10
request.open('GET', 'http://api.spitcast.com/api/county/spots/san-diego/', true);
request.responseType = 'text';

request.onload = function () {
	var data = JSON.parse(this.responseText);

	const h1 = document.createElement('h1');
	h1.textContent = "Beaches Near You:";
	h1.setAttribute("style", "line-height: 10px; font-size: 30px");
	app.appendChild(h1);

	data.forEach(beach => {
		console.log("spot:", beach.spot_name);

		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		const link = document.createElement('a');
		var linkText = document.createTextNode(beach.spot_name);
		link.appendChild(linkText);
		link.setAttribute("style", "line-height: 40px; font-size: 20px");
		link.href = "weatherdata.html";

		card.appendChild(link);
		app.appendChild(card);
	})
}
request.send();
