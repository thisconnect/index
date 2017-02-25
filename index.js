var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

app.get('/log', (request, response) => {
  response.send(process.env.LOG_LEVEL);
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});




