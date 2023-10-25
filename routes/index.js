const express = require('express')
const path = require('path')

const Auth = require('./users')

module.exports = function(passport, User) {
  // API RoutesZ
  router.use('Auth', Auth(passport, User))

    // If no API routes are hit, send the React app
    router.use((req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
    return router
}