const express = require('express');
const history = require('connect-history-api-fallback');

console.log("server start");

const app = express();
app.use(history());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.listen(8080, () => console.log('server started'));