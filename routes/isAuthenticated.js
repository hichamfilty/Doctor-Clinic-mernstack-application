module.exports = function(req, res, next) {
  if(req.isAuthenticated()){
    console.log('Authentication is successfull')
    return next()
  }
  console.log('Authentication was not successfull!!')
  res.redirect('/')
}