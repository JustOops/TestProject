/**
 * Created by oops on 13.03.15.
 */

module.exports = function (app){
  console.log ('------- Index.js logged success --------');

    function myCustomStack(req, res, next){
        console.log(req.headers['user-agent']);
        next();
    };

    function errorHandler(err, req, res, next){
       console.error(err);
        res.status(500).send(err);
    };


    app.get('/', function(req,res,next){
       res.status(200).send({success: '-----------root folder---------------'});
    });

    app.get('/test',myCustomStack, function(req,res,next){
        res.status(200).send({success: '-----------root folder12---------------'});
    });

    app.use(errorHandler);
};