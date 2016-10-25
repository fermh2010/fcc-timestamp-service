const express = require('express');
const app = express();

app.all('*', function(req, res) {
   res.end('test') ;
});

app.listen(8080);