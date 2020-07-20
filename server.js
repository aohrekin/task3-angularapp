const express = require("express");
const app = express();
app.use(express.static(__dirname + "/task3"));
app.get('/*', function(req, res) {
  res.sendFile('/src/app/app.component.html' , { root : __dirname});
});
// root: path.join(__dirname, '../public')
// app.get('/', function(req, res) {
//   res.send('hello world');
// });
app.listen(process.env.PORT || 8080);
