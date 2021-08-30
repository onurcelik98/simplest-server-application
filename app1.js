const express = require('express');
const app = express();
global.address = process.env.ADDRESS || "127.0.0.1";
global.port = process.env.PORT || 8000;
const birds = require("./routes/birds");
const mammals = require("./routes/mammals");
const cors = require('cors')

app.use('/birds', birds);
app.use('/mammals', mammals);
app.use(cors());

// app.use(express.static('frontend/ngfront/build'))

function getLandingHandler(req, res) {
    /*
    res.send('Hello, I am app1.js!\n' +
        'I just wanted to say \"Hello world!\" here.\n' +
        'BTW, I am currently listening at port ' + port + '.\n\n');
     */
    res.send("Hello world from " + port + ".\n\n");
}

app.get('/', getLandingHandler);

// This is for myfrontend.js to fetch the address and port information of the serving server.
// This enables us to involve and mess with NginX while working on that project.
app.get('/api', function(req, res) {
    const serverInfo = {
        address: address,
        port: port
    };
    res.json(serverInfo);
});

// The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res) {
    res.status(404).send('Not Found on port ' + port + ' :/\n\n');
});

// Listening on the defined port
app.listen(port, () => {
    console.log(`Example app listening at http://${address}:${port}`);
});
