var express = require('express');
var cors = require('cors');
var app = express();
;
app.listen(3001, function () {
    console.log(`\uD83D\uDE80 Server ready at http://localhost:3001`);
});

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.status(200).send({ server_is: "up" });
});