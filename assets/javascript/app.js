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
  var dataRef = firebase.database();
  var playerChoice = "";
  var chair=['playerTwo', 'playerOne'];
  var seats=2;
  var ref;
  var player='';
  var lives = 5;

  $('.chair').on('click', function(event){
    event.preventDefault();
    if (seats>0){
      player = chair[seats-1];
      seats--;
      dataRef.ref().push({
        seat: seats,
      })
      ref="/"+player;
      ref=ref.toString();
      console.log(ref);
  }
    else{
      console.log('No more seats');
      $('.choices').show();
    }
  });

  $('.choice').on('click', function(event){
    console.log(event);
    event.preventDefault();
    weapon=this.value;
    $('#ready').attr('weapon', weapon);
    playerChoice = weapon;
    console.log(playerChoice);
    return false;
  });


$('#ready').on('click', function(event){
  event.preventDefault();
  if ($(this).attr('weapon')){
      $('.weapon').hide();
      $(this).text('Weapon Picked!');
      $(this).attr('value', 'ready');
      ready();
     // fight();
    }
  else{
    alert('Make a selection!');
  }
});

function ready(){
  dataRef.ref(ref).push({

    seat: player,
    weapon: playerChoice,
    ready: 'ready',
    lives: lives,
  });
};