const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('./model/User')

module.exports = function(passport){
  passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username })
        if(!user){
          return done(null, false, { message: 'go register first'})
        }
        const passwordMatch = await user.isValidPassword(password)
        if(!passwordMatch){
          return done(null, false, { message: 'Wrong password'})
        }
        return done(null, user, { message: 'user is logged in successfully' })
      } catch (error) {
        return done(error)
      }
    }
  ))

  passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
        isAdmin: user.isAdmin,
        id: user._id
      }
      done(err, userInformation)
    })
  })
}