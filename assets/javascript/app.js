  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC-z7D-zETMWgwdG1LFQ38b7a70oqP_g4c",
    authDomain: "learning-daf57.firebaseapp.com",
    databaseURL: "https://learning-daf57.firebaseio.com",
    projectId: "learning-daf57",
    storageBucket: "learning-daf57.appspot.com",
    messagingSenderId: "639369802739"
  };
  firebase.initializeApp(config);
  // And now, the rest of the code
  var database = firebase.database();
  var choiceA = "";
  var choiceB = "";

  $('.choice').on('click', function(event){
      console.log(this.id);
      if ($(event.target).hasClass('one')){
          console.log('player one chooses ' + this.value);
      }
      else{
          console.log('player two chooses ' + this.value);
      }
  } )
 // database.ref("gameChoices").on("value", function(snapshot) {
      
  