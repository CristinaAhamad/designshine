const search = document.getElementById('searchOptions');
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let req = new XMLHttpRequest();

//http://magicseaweed.com/api/797022276644-6ludpo55lhr67659aqrvu678sftkevis.apps.googleusercontent.com/forecast/?spot_id=10
req.open('GET', 'http://api.spitcast.com/api/county/spots/san-diego/', true);
req.responseType = 'text';

req.onload = function () {
	var data = JSON.parse(this.responseText);

	const h1 = document.createElement('h1');
	h1.textContent = "Beaches Near You:";
	h1.setAttribute("style", "line-height: 10px; font-size: 30px");
	search.appendChild(h1);

	data.forEach(beach => {
		console.log("spot:", beach.spot_name);
		//check if beach name is 1 or 2+ words
		var beachName = beach.spot_name;
		var words = beachName.split(' ').filter(function(v){return v!==''});
		if (words.length > 1) {
			beachName = beachName.replace(/ /g, '');
		}

		//Beach names for search
		const card = document.createElement('div');
		card.setAttribute('class', 'card');
		const link = document.createElement('button');
		link.setAttribute('data-toggle', 'collapse');
		link.setAttribute('data-target', '#'+ beachName +'Info');
		link.setAttribute('type', 'button');
		var linkText = document.createTextNode(beach.spot_name);
		link.appendChild(linkText);
		link.setAttribute('class', 'linkButton');
		link.setAttribute('id', beachName);
		link.setAttribute("style", "line-height: 40px; font-size: 20px;");
		//link.href = "weatherdata.html";

		var collapsed = document.createElement('div');
		collapsed.setAttribute('class', 'collapse');
		collapsed.setAttribute('id', beachName +'Info');

		card.appendChild(link);
		card.appendChild(collapsed);
		search.appendChild(card);
	})
}
req.send();
