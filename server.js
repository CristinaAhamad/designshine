const express = require('express');
const app = express();

app.use(express.static('static_files'));

/*const fakeDatabase = {
	'Blacks': {swell: '5', tide: '11', wind: '4mph', temp: '60'},
	'Shores': {swell: '3', tide: '4', wind: '7mph', temp: '58'},
	'Scripps': {swell: '4', tide: '7', wind: '10mph', temp: '58'}
};*/

app.get('/beaches', (req, res) => {
	res.send();
});

app.get('/beaches/:name', (req, res) => {
	console.log("made it here");
});


app.listen(3000, () => {
	console.log('Server started at http://localhost:3000/');
});
