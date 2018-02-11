
// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyBkDX4kVZnLFXwm7tWtPcRdIgmPXNeUBY0",
    authDomain: "something-new-b6c74.firebaseapp.com",
    databaseURL: "https://something-new-b6c74.firebaseio.com",
    projectId: "something-new-b6c74",
    storageBucket: "something-new-b6c74.appspot.com",
    messagingSenderId: "298405897708"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  

  $("#add-train-btn").on("click", function() {
    alert('HELLO WORLD');
    console.log('HELlo world');
    event.preventDefault();
    alert('HELLLLOOOOO World');


  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("destination-input").val().trim();
    var trainTime = moment($("#time-input").val().trim(), "DD/MM/YY").format("X");
    var trainFreq = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: trainTime,
      freq: trainFreq
    };
  console.log('trainName '+ trainName);
  console.log('trainDestination'+ trainDestination);
    // Uploads train data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.freq);
  
    // Alert
    alert("Train Schedule added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().role;
    var trainTime = childSnapshot.val().start;
    var trainFrequency = childSnapshot.val().rate;
  
    // train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);
  
    // polished train info
    var trainTimePolish = moment.unix(trainTime).format("MM/DD/YY");
  



  

  
    // Add each train's data into the table
    $("#train-table > tbody").append("<tr><th>" + trainName + "</th><th>" + trainDestination + "</th><th>" +
    trainTimePolish + "</th><th>" + "</th></tr>");
  });
  

  $(document.body).on("click","#add-train-btn",function(){
    alert('HELLO WORLD');
  });