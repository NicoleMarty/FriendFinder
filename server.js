// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var data = [{
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "Jeremiah Scanlon",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        "scores": [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        "name": "Louis T. Delia",
        "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        "scores": [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Lou Ritter",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        "name": "Jordan Biason",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
        "scores": [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        "name": "Shivali",
        "photo": "https://friend-finder-fsf.herokuapp.com/survey",
        "scores": [
            "5",
            "2",
            "2",
            "2",
            "2",
            "2",
            "3",
            "2",
            "4",
            "2"
        ]
    },
    {
        "name": "emily",
        "photo": "https://friend-finder-fsf.herokuapp.com/survey",
        "scores": [
            "2",
            "4",
            "2",
            "1",
            "1",
            "4",
            "3",
            "2",
            "4",
            "1"
        ]
    },
    {
        "name": "emily",
        "photo": "https://friend-finder-fsf.herokuapp.com/survey",
        "scores": [
            "2",
            "4",
            "2",
            "1",
            "1",
            "4",
            "3",
            "2",
            "4",
            "1"
        ]
    },
    {
        "name": "emily",
        "photo": "https://friend-finder-fsf.herokuapp.com/survey",
        "scores": [
            "2",
            "4",
            "2",
            "1",
            "1",
            "4",
            "3",
            "2",
            "4",
            "1"
        ]
    },
    {
        "name": "emily",
        "photo": "https://friend-finder-fsf.herokuapp.com/survey",
        "scores": [
            "2",
            "4",
            "2",
            "1",
            "1",
            "4",
            "3",
            "2",
            "4",
            "1"
        ]
    },
    {
        "name": "emily",
        "photo": "https://friend-finder-fsf.herokuapp.com/survey",
        "scores": [
            "2",
            "1",
            "5",
            "5",
            "4",
            "4",
            "2",
            "4",
            "3",
            "1"
        ]
    },
    {
        "name": "emily",
        "photo": "https://friend-finder-fsf.herokuapp.com/survey",
        "scores": [
            "2",
            "1",
            "5",
            "5",
            "4",
            "4",
            "2",
            "4",
            "3",
            "1"
        ]
    },
    {
        "name": "Emily",
        "photo": "https://www.google.com/search?q=chinese+water+deer&rlz=1C1NDCM_enUS826US826&sxsrf=ACYBGNRfsAoD6IqhAlKt0kpR1HLZlw2qig:1570318936752&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiaw6LzpYblAhWQqp4KHZahA_cQ_AUIEigB&biw=1366&bih=657#",
        "scores": [
            "5",
            "4",
            "2",
            "1",
            "3",
            "2",
            "3",
            "2",
            "3",
            "3"
        ]
    },
    {
        "name": "Rogelio R Zavala",
        "photo": "fs",
        "scores": [
            "3",
            "4",
            "3",
            "3",
            "2",
            "3",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        "name": "Rogelio R Zavala",
        "photo": "fs",
        "scores": [
            "3",
            "4",
            "3",
            "3",
            "2",
            "3",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        "name": "Rogelio R Zavala",
        "photo": "fs",
        "scores": [
            "3",
            "4",
            "3",
            "3",
            "2",
            "3",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        "name": "Lola",
        "photo": "https://c8.alamy.com/comp/MND3G3/vector-character-design-concept-superhero-woman-in-superwoman-pose-in-blue-and-red-costume-with-red-cape-and-purple-hair-MND3G3.jpg",
        "scores": [
            "3",
            "4",
            "3",
            "4",
            "3",
            "2",
            "4",
            "3",
            "3",
            "4"
        ]
    },
    {
        "name": "Bobby Lightfoot",
        "photo": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/07/12/bigfoot-0.jpg?w968",
        "scores": [
            "4",
            "2",
            "4",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Hi ",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3"
        ]
    },
    {
        "name": "me",
        "photo": "sdsddsvsv",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Lili",
        "photo": "https://c8.alamy.com/comp/MND3G3/vector-character-design-concept-superhero-woman-in-superwoman-pose-in-blue-and-red-costume-with-red-cape-and-purple-hair-MND3G3.jpg",
        "scores": [
            "3",
            "1",
            "2",
            "1",
            "4",
            "2",
            "3",
            "2",
            "3",
            "2"
        ]
    },
    {
        "name": "me",
        "photo": "sdsddsvsv",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "giphyapp",
        "photo": "aa",
        "scores": [
            "2",
            "2",
            "3",
            "5",
            "3",
            "3",
            "4",
            "3",
            "2",
            "3"
        ]
    },
    {
        "name": "giphyapp",
        "photo": "aa",
        "scores": [
            "2",
            "2",
            "3",
            "5",
            "3",
            "3",
            "4",
            "3",
            "2",
            "3"
        ]
    },
    {
        "name": "giphyapp",
        "photo": "aa",
        "scores": [
            "2",
            "2",
            "3",
            "5",
            "3",
            "3",
            "4",
            "3",
            "2",
            "3"
        ]
    },
    {
        "name": "giphyapp",
        "photo": "aa",
        "scores": [
            "2",
            "2",
            "3",
            "5",
            "3",
            "3",
            "4",
            "3",
            "2",
            "3"
        ]
    },
    {
        "name": "Timmy",
        "photo": "https://southparkstudios.mtvnimages.com/images/shows/south-park/episode-thumbnails/season-4/south-park-s04e04-timmy-2000_4x3.jpg",
        "scores": [
            "5",
            "2",
            "3",
            "5",
            "2",
            "3",
            "4",
            "2",
            "4",
            "1"
        ]
    },
    {
        "name": "todo",
        "photo": "kkk",
        "scores": [
            "1",
            "2",
            "2",
            "1",
            "3",
            "3",
            "2",
            "2",
            "2",
            "1"
        ]
    },
    {
        "name": "todo",
        "photo": "kkk",
        "scores": [
            "1",
            "2",
            "2",
            "1",
            "3",
            "3",
            "2",
            "2",
            "2",
            "1"
        ]
    },
    {
        "name": "todo",
        "photo": "kkk",
        "scores": [
            "1",
            "2",
            "2",
            "1",
            "3",
            "3",
            "2",
            "2",
            "2",
            "1"
        ]
    },
    {
        "name": "todo",
        "photo": "kkk",
        "scores": [
            "1",
            "2",
            "2",
            "1",
            "3",
            "3",
            "2",
            "2",
            "2",
            "1"
        ]
    },
    {
        "name": "Patrick",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRcYdvAf91LJVGqI_UANXErhA8qhUit4lSAZ451g0V5eP3Jrr",
        "scores": [
            "1",
            "3",
            "5",
            "1",
            "3",
            "5",
            "1",
            "1",
            "5",
            "3"
        ]
    },
    {
        "name": "Peter",
        "photo": "adsdasd",
        "scores": [
            "3",
            "4",
            "4",
            "1",
            "4",
            "4",
            "3",
            "3",
            "5",
            "4"
        ]
    },
    {
        "name": "a",
        "photo": "https://www.google.com/imgres?imgurl=http%3A%2F%2Fclipart-library.com%2Fdata_images%2F233139.png&imgrefurl=http%3A%2F%2Fclipart-library.com%2Fgirl-cliparts.html&docid=UBf6GK1Jp0ChBM&tbnid=W5gpyOBubmz9UM%3A&vet=10ahUKEwiF4Luq_oDlAhUyIDQIHRH4C-EQMwh4KAAwAA..i&w=2854&h=5822&bih=722&biw=1088&q=clipart%20girl&ved=0ahUKEwiF4Luq_oDlAhUyIDQIHRH4C-EQMwh4KAAwAA&iact=mrc&uact=8",
        "scores": [
            "3",
            "2",
            "5",
            "2",
            "3",
            "4",
            "3",
            "3",
            "3",
            "3"
        ]
    },
    {
        "name": "ss",
        "photo": "http://google.com",
        "scores": [
            "5",
            "4",
            "1",
            "1",
            "3",
            "5",
            "4",
            "2",
            "2",
            "2"
        ]
    },
    {
        "name": "amjedayoub",
        "photo": "https://friend-finder-fsf.herokuapp.com/survey",
        "scores": [
            "3",
            "5",
            "3",
            "4",
            "3",
            "2",
            "4",
            "3",
            "3",
            "5"
        ]
    },
    {
        "name": "Test",
        "photo": "https://images.app.goo.gl/p21doBUmkuWBhPC26",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Tesjhhjkh",
        "photo": "https://images.app.goo.gl/p21doBUmkuWBhPC26",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Tesjhhjkh",
        "photo": "https://images.app.goo.gl/p21doBUmkuWBhPC26",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Mandy",
        "photo": "https://www.istockphoto.com/photo/sunny-cat-gm508030340-85015717",
        "scores": [
            "2",
            "3",
            "2",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "2"
        ]
    },
    {
        "name": "Mandy",
        "photo": "https://www.istockphoto.com/photo/sunny-cat-gm508030340-85015717",
        "scores": [
            "2",
            "3",
            "2",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "2"
        ]
    },
    {
        "name": "Parkler",
        "photo": "https://preview.redd.it/z47yv5zz7xq31.jpg?width=640&crop=smart&auto=webp&s=97661afb211f6a06dc2e9623c84df839f4ac25aa",
        "scores": [
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5"
        ]
    },
    {
        "name": "Parkler",
        "photo": "https://preview.redd.it/z47yv5zz7xq31.jpg?width=640&crop=smart&auto=webp&s=97661afb211f6a06dc2e9623c84df839f4ac25aa",
        "scores": [
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5"
        ]
    },
    {
        "name": "Parkler",
        "photo": "https://preview.redd.it/z47yv5zz7xq31.jpg?width=640&crop=smart&auto=webp&s=97661afb211f6a06dc2e9623c84df839f4ac25aa",
        "scores": [
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5"
        ]
    },
    {
        "name": "Parkler",
        "photo": "https://preview.redd.it/z47yv5zz7xq31.jpg?width=640&crop=smart&auto=webp&s=97661afb211f6a06dc2e9623c84df839f4ac25aa",
        "scores": [
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "4"
        ]
    },
    {
        "name": "Parkler",
        "photo": "https://preview.redd.it/z47yv5zz7xq31.jpg?width=640&crop=smart&auto=webp&s=97661afb211f6a06dc2e9623c84df839f4ac25aa",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Parkler",
        "photo": "https://preview.redd.it/z47yv5zz7xq31.jpg?width=640&crop=smart&auto=webp&s=97661afb211f6a06dc2e9623c84df839f4ac25aa",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "asdf",
        "photo": "fasd",
        "scores": [
            "3",
            "3",
            "4",
            "2",
            "4",
            "2",
            "3",
            "4",
            "5",
            "2"
        ]
    },
    {
        "name": "Chris Bortel",
        "photo": "sdfs",
        "scores": [
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Somebody To Love",
        "photo": "https://www.thespruce.com/thmb/_mdepcJupW43wUwEHikYTfxwE-Q=/1333x1000/smart/filters:no_upscale()/duck-big-bill-59ef8e5068e1a2001072c89e.jpg",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Chris Bortel",
        "photo": "sdfs",
        "scores": [
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Oliver Sun",
        "photo": "https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/UCB-SF-FSF-FT-08-2019-U-C/blob/master/course-content/12-express/homework/Instructions/homework_instructions.md",
        "scores": [
            "5",
            "2",
            "4",
            "1",
            "4",
            "1",
            "1",
            "1",
            "5",
            "3"
        ]
    },
    {
        "name": "1",
        "photo": "2",
        "scores": [
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Paul Thomas",
        "photo": "https://twitter.com/BigPaulThomas/status/1179543270570901504/photo/1",
        "scores": [
            "3",
            "1",
            "4",
            "3",
            "3",
            "3",
            "2",
            "4",
            "2",
            "3"
        ]
    },
    {
        "name": "Paul Thomas",
        "photo": "https://twitter.com/BigPaulThomas/status/1179543270570901504/photo/1",
        "scores": [
            "3",
            "1",
            "4",
            "3",
            "3",
            "3",
            "2",
            "4",
            "2",
            "3"
        ]
    },
    {
        "name": "Paul Thomas",
        "photo": "https://twitter.com/BigPaulThomas/status/1179543270570901504/photo/1",
        "scores": [
            "3",
            "1",
            "4",
            "3",
            "3",
            "3",
            "2",
            "4",
            "2",
            "3"
        ]
    },
    {
        "name": "Paul Thomas",
        "photo": "https://twitter.com/BigPaulThomas/status/1179543270570901504/photo/1",
        "scores": [
            "3",
            "1",
            "4",
            "3",
            "3",
            "3",
            "2",
            "4",
            "2",
            "3"
        ]
    },
    {
        "name": "test",
        "photo": "link",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "bob",
        "photo": "test",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "NICOLE",
        "photo": "https://www.facebook.com/photo.php?fbid=10201406239625042&set=a.10201406239945050&type=3",
        "scores": [
            "1",
            "3",
            "2",
            "2",
            "2",
            "3",
            "3",
            "4",
            "3",
            "2"
        ]
    }
];

// Routes
// ===========================================================

// KEEP ME shows homepage text
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// gets all friendssurvey which should display the survey page.
app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// KEEP ME gets all friends
app.get("/api/friends", function(req, res) {
    return res.json(data);
});

// gets only the chosen friend
app.get("/api/friends/:friends", function(req, res) {
    // pushes data to front end for chosen character
    var theChosenOne = req.params.friends;
    console.log(theChosenOne);

    // iterates through friend array to find chosen friend
    for (var i = 0; i < friends.length; i++) {
        if (theChosenOne === friends[i].routeName) {
            return res.json(friends[i]);
        }
    }

    // tells user if the friend is not found
    return res.send("No friend found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});