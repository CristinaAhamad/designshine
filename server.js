const express = require('express');
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = {
	'Blacks': {swell: '5', tide: '11', wind: '4mph', temp: '60'},
	'Shores': {swell: '3', tide: '4', wind: '7mph', temp: '58'},
	'Scripps': {swell: '4', tide: '7', wind: '10mph', temp: '58'}
};

app.get('/beaches', (req, res) => {
	res.send(Object.keys(fakeDatabase));
});

app.get('/beaches/:name', (req, res) => {
  const beachToLookup = req.params.name;
  const val = fakeDatabase[beachToLookup];
  console.log(beachToLookup, ': ', val);
  if (val) {
    res.send({beachToLookup, val});
  } else {
    res.send({beachToLookup: 'NA'});
  }
});


const request = new XMLHttpRequest();
//http://magicseaweed.com/api/797022276644-6ludpo55lhr67659aqrvu678sftkevis.apps.googleusercontent.com/forecast/?spot_id=10
request.open('GET', 'http://api.spitcast.com/surf-report/county/san-diego/');
resquest.responseType = 'json';
request.send();

request.onload = function () {
	
}

app.listen(3000, () => {
	console.log('Server started at http://localhost:3000/');
});
