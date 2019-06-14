var firebaseConfig = {
    apiKey: "AIzaSyDArUyqKu9lrX5Att3RQJFlyZXaDyItf10",
    authDomain: "train-schedule-3698e.firebaseapp.com",
    databaseURL: "https://train-schedule-3698e.firebaseio.com",
    projectId: "train-schedule-3698e",
    storageBucket: "",
    messagingSenderId: "24499628504",
    appId: "1:24499628504:web:7591852305274dae"
  };
  // Initialize Firebase to the variable
  firebase.initializeApp(firebaseConfig);

  //setting a database
  var database = firebase.database();

  //Giving the initaial values
  var name = "";
  var destination = "";
  var firstTrain = "";
  var frequency = "";
  var next = "";
// giving a event listener to submit a  button
  $("#add-train-btn").on("click", function(event) {

  // prevent the page from refreshing
  event.preventDefault();
  
  //grabbing values from form
  name = $("#name-input").val().trim();
  destination = $("#destination-input").val().trim();
  firstTrain = $("#firstTrain-input").val().trim();
  frequency = $("#frequency-input").val().trim();

  database.ref().push({
    trainName: name,
    trainDestination:  destination,
    firstTrain: firstTrain,
    trainFrequency: frequency

  })

  alert("success!");

  $("#name-input").val("");
   $("#destination-input").val("");
  $("#frequency-input").val("");
  $("#firstTrain-input").val("");

  })

//event handlers for database to be upgraded
  database.ref().on("child_added", function(childAddedSnapshot) {
    var firstTrain = childAddedSnapshot.val().firstTrain;
    var trainDestination = childAddedSnapshot.val().trainDestination;
    var trainFrequency = childAddedSnapshot.val().trainFrequency;
    var trainName = childAddedSnapshot.val().trainName;
  
  //have to create new rows for every database update
  var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(""),
      $("<td>").text("N/A"));

      $("#train-table").append(newRow);

  })