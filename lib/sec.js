module.exports = function(req, res, next){
  if (req.headers.authorization && req.headers.authorization == "secretz"){
    // TODO: This request is OK, let it in
    return next();
  }
  res.status(401).json({ message :  "You need to provide some authoriaztion header" });
};