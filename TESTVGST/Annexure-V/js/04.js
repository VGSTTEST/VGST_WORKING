// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGO2B6hQTK4K5OE5zrbJ02vjdi6f28Erk",
    authDomain: "vgstproposals.firebaseapp.com",
    databaseURL: "https://vgstproposals.firebaseio.com",
    projectId: "vgstproposals",
    storageBucket: "vgstproposals.appspot.com",
    messagingSenderId: "552421108644",
    appId: "1:552421108644:web:6e33c08cbc16366cdeef31",
    measurementId: "G-0QNPLQVH6Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Aadhar/Annexure_5'); 
  
  
  // Listen for form submit
  document.getElementById('Similar').addEventListener('submit', submitForm);
  
  //Submit form
  function submitForm(e)
  {
    e.preventDefault(); 
  
  
  // Get values
  
  var N01 = getInputval('input01');
  var N02 = getInputval('input02');
  var N03 = getInputval('input03');
  var N04 = getInputval('input04');
  var N05 = getInputval('input05');
  var N06 = getInputval('input06');
  var N07 = getInputval('input07');
  var N08 = getInputval('input08');
  var N09 = getInputval('input09');
  var N10 = getInputval('input10');
  var N11 = getInputval('input11');

  
  
    //Save Principal Investigator
    savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11)     // Show alert
  //document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  // },3000);
  
  // Clear form
  document.getElementById('Similar').reset();
  }
  
  // Function to get from values
  function getInputval(id)
  {
    return document.getElementById(id).value;
  }
  
  // Save Principal Investigator
  function savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11)
  {
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
        
            input01 : N01,
            input02 : N02,
            input03 : N03,
            input04 : N04,
            input05 : N05,
            input06 : N06,
            input07 : N07,
            input08 : N08,
            input09 : N09,  
            input10 : N10, 
            input11 : N11,         
       
  
        }
    );
  }