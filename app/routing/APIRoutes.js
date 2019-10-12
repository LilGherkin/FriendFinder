var friends = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res){
    var BestMatch = {
      name: "",
      photo: "",
      FriendDifference: 1000
    };
    console.log(req.body);
    var UserData = req.body;
    var UserScores = UserData.scores;
    console.log(UserScores);
    var TotalDifference = 0;
    for (var i = 0; i < friends.length; i++){
      console.log(friends[i]);
      TotalDifference = 0;
      for (var j = 0; j < friends.length; j++){
        TotalDifference += Math.abs(parseInt(UserScores[j]) = parseInt(friends[i].scores[j]));
        if (TotalDifference <= BestMatch.FriendDifference){
          BestMatch.name = friends[i].name;
          BestMatch.photo = friends[i].photo;
          BestMatch.FriendDifference = TotalDifference;
        }
      }
    }
    friends.push(UserData);
    res.json(BestMatch);
  })
};
