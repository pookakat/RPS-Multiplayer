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
  var playerOneChoice = "";
  var playerTwoChoice = "";

  $('.choice').on('click', function(event){
      if ($(event.target).hasClass('one')){
          console.log('player one chooses ' + this.value);
          $('#oneReady').attr('weapon', this.value);
          playerOneChoice = this.value;
      }
      else{
          $('#twoReady').attr('weapon', this.value);
          playerTwoChoice = this.value;
          };  
  } );


$('.ready').on('click', function(event){
  event.preventDefault();
  if ($(this).attr('weapon')){
    if($(this).attr('id') === 'oneReady'){
      $('.oneWeapon').hide();
    }
    else{
      $('.twoWeapon').hide();
    }
    $(this).text('Weapon Picked!');
    $(this).attr('value', 'ready');
    fight();
  }
  else{
    alert('Make a selection!');
  }
});


function fight(){
  if ($('#oneReady').attr('value') === 'ready' && $('#twoReady').attr('value') === 'ready'){
    database.ref("/choices").set({
      playerone: playerOneChoice,
      playertwo: playerTwoChoice,
    });
  }
}
var choicesRef = database.ref("/choices");

choicesRef.on("value", function(snapshot){
  $('#choices').html('<h2>Player One chooses ' + snapshot.val().playerone + ' vs Player Two chooses ' + snapshot.val().playertwo + '</h2>');
})

 // database.ref("gameChoices").on("value", function(snapshot) {
      
  