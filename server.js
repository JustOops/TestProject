var express = require('express');
var app = express();
var loger = require('morgan');

function myCustomStack(req, res, next){
    console.log(req.headers['user-agent']);
    next();
};

app.use(loger(myCustomStack));
app.use(loger('dev'));

require ('./routers/index.js')(app);


app.listen(3030, function(){
    console.log ('------- Express Sart Success -------')
});

var express = require('express');
var app = express();
var loger = require('morgan');


/*function myCustomStack(req, res, next){
    console.log(req.headers['user-agent']);
    next();
}*/

//app.use(myCustomStack);
app.use(loger('dev'));


require('./routers/index')(app);

//прослуховування порту
app.listen(3030,function(){
    console.log('-----------------> Express start success <----------------');
});