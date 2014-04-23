/**
** run this test by. 
** node test.js
**/

sm = require("./small_giant");
app = sm();
app.use('/', function(req,res,next){
    res.write("hello: ");
    res.end('Small Giant!');
});
app.listen('8003');
console.log("runing on http://127.0.0.1:8003");