const express = require('express');
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = {
	'Blacks': {swell: '5'},
	'Shores': {swell: '3'},
	'Scripps': {swell: '4'}
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

app.listen(3000, () => {
	console.log('Server started at http://localhost:3000/');
});
