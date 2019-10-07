-- Purpose --
This is a compatibility-based "Friend Finder" application -- basically a dating app, but to find friends, not dates. 

-- Function --
This full-stack site takes in results from users' surveys, then compares their answers with those from other users. 
The app will then display the name and picture of the user with the best overall match.

-- Technologies Used --
Express to handle routing
Deployed to Heroku so users can fill out the survey
Javascript/JQuery
html/css
Materialize
Path
node
json

-- File Structure --
FriendFinder
  - .gitignore
  - app
    - data
      - friends.js
    - public
      - home.html
      - survey.html
    - routing
      - apiRoutes.js
      - htmlRoutes.js
  - node_modules
  - package.json
  - server.js
