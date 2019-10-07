// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// ---------------------------------------------------------------------------------------------------
var userArray = [{
    "name": "",
    "photo": "",
    "scores": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
}];

module.exports = userArray;

// compare the difference between current user's scores against those from other users, question by question.
// ---------------------------------------------------------------------------------------------------


// Add up the differences to calculate the totalDifference.
// Remember to use the absolute value of the differences.
// Your app should calculate both 5-3 and 3-5 as 2
// The closest match will be the user with the least amount of difference.


// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.