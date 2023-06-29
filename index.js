// Import dependencies
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');


// Load environment variables
dotenv.config();
const serverapiURL = process.env.SEND_TO_DYNAMODB_API;

// Create Express app
const app = express();

// Set the port
const port = process.env.PORT || 3300;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/sendtoDynamo', async (request, response) =>{
 //    try {
	// console.log("SENDING")
	// delete request.headers.host;
 //  	delete request.headers.referer;
	// request.body = { "x": "354.50", "y": "63.80", "z": "-4.10", "code": "909" };
	// console.log(request.body)
 //        const fetchResponse = await fetch(serverapiURL, request);
	// console.log(fetchResponse);
	// console.log(fetchResponse.headers.get('content-type'));
 //      } catch (error) {
 //        console.error('Error:', error);
 //        response.status(500).json({ error: 'Internal server error' });
 //      }


	
                var myHeaders = new fetch.Headers();
                myHeaders.append("Content-Type", "application/json");
                const data = { "x":"TEST", "y":"TEST", "z":"TEST", "code":"TEST" }
		console.log("DATA: ", raw)
                var raw = JSON.stringify(data);
		console.log("RAW: ", raw)
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
                // make API call with parameters and use promises to get response
                const res = await fetch(serverapiURL, requestOptions)
                .catch(error => console.log('error', error));
	
})


app.get('/dinoname', async (request, response) => {
    const dinoNameResponse = {'sample':'json'};
    const usingApiKey = {serverapiURL};
    console.log(usingApiKey);
	response.json(dinoNameResponse);
});
