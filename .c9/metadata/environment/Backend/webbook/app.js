{"filter":false,"title":"app.js","tooltip":"/Backend/webbook/app.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":21,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["app.use(function(req, res, next) {","  res.header(\"Access-Control-Allow-Origin\", '*');","  res.header(\"Access-Control-Allow-Credentials\", true);","  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');","  res.header(\"Access-Control-Allow-Headers\", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');","  next();","});"],"id":2}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":27,"column":3},"end":{"row":27,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1611458812381,"hash":"ea71090ab3d4e5a23a4064c9e296088783695d8d"}