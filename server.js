/* Node.js + Express server backend for Tidekick. To start the server, run node server.js, 
and open the webpage at http://localhost:3000/ */

const express = require('express');
const app = express();

app.use(express.static('static_files'));

app.listen(3000, () => {
	console.log('Server started at http://localhost:3000/');
});
