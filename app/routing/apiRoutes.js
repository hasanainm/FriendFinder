var path = require('path');

var friendsData = require("../data/friends.js")

module.exports = function (app) {
  app.get("/api/friendsList", function (req, res) {
    return res.json(friendsInfo);
  });

  app.post("/api/friendsList", function (req, res) {
    var userAnswers = req.body.answers;
    var matchArr = [];
    var userMatch = 0;
    
    // create variable to hold result  from the survey 
    //compare the scores with other users to see who's scores matched
    

  })
}