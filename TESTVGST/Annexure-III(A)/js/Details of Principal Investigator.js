// Your web app's Firebase configuration
var userId = firebase.auth().currentUser.uid;
// Reference messages collection
var messagesRef = firebase.database().ref('test/'+userId); 


// Listen for form submit
document.getElementById('Proposals').addEventListener('submit', submitForm);

var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var PrincipalInvestigatorName                 = (snapshot.val() && snapshot.val().PrincipalInvestigatorName) || 'NULL';
  var PrincipalInvestigatorDOB                  = (snapshot.val() && snapshot.val().PrincipalInvestigatorDOB) || 'NULL';
  var PrincipalInvestigatorGender               = (snapshot.val() && snapshot.val().PrincipalInvestigatorGender) || 'NULL';
  var PrincipalInvestigatorQualification        = (snapshot.val() && snapshot.val().PrincipalInvestigatorQualification) || 'NULL';
  var PrincipalInvestigatorDesignation          = (snapshot.val() && snapshot.val().PrincipalInvestigatorDesignation) || 'NULL';
  var PrincipalInvestigatorDepartment           = (snapshot.val() && snapshot.val().PrincipalInvestigatorDepartment) || 'NULL';
  var PrincipalInvestigatorExperience           = (snapshot.val() && snapshot.val().PrincipalInvestigatorExperience) || 'NULL';
  var PrincipalInvestigatorEmail                = (snapshot.val() && snapshot.val().PrincipalInvestigatorEmail) || 'NULL';
  var PrincipalInvestigatorPhoneNo              = (snapshot.val() && snapshot.val().PrincipalInvestigatorPhoneNo) || 'NULL';
  var PrincipalInvestigatorResidentialAddress   = (snapshot.val() && snapshot.val().PrincipalInvestigatorResidentialAddress) || 'NULL';
});


//Submit form
function submitForm(e)
{
   e.preventDefault(); 
// Get values

   var priName = getInputval('PrincipalInvestigatorName');
   var priGender = getInputval('PrincipalInvestigatorGender');
   var priDOB = getInputval('PrincipalInvestigatorDOB');
   var priQual = getInputval('PrincipalInvestigatorQualification');
   var priDesg = getInputval('PrincipalInvestigatorDesignation');
   var priDept = getInputval('PrincipalInvestigatorDepartment');
   var priExp = getInputval('PrincipalInvestigatorExperience');
   var priEmail = getInputval('PrincipalInvestigatorEmail');
   var priPhone = getInputval('PrincipalInvestigatorPhoneNo');
   var priAdd = getInputval('PrincipalInvestigatorResidentialAddress')
   //Save Principal Investigator
   savePrincipalInvestigator(priName,priGender,priDOB,priQual,priDesg,priDept,priExp,priEmail,priPhone,priAdd)

     // Show alert
 //document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 //setTimeout(function(){
   //document.querySelector('.alert').style.display = 'none';
// },3000);

 // Clear form
 document.getElementById('Proposals').reset();
}

// Function to get from values
function getInputval(id)
{
   return document.getElementById(id).value;
}

function prathiktest(){
 return firebase.database().ref('test/'+userId).once('value').then(function(snapshot) {
   var username = (snapshot.val() && snapshot.val().name) || 'Null';
   console.log(username)
 });
}
// Save Principal Investigator
function savePrincipalInvestigator(priName,priGender,priDOB,priQual,priDesg,priDept,priExp,priEmail,priPhone,priAdd)
{
   var newPrincipalInvestigator = messagesRef.push();
   newPrincipalInvestigator.set(
       {
         PrincipalInvestigatorName: priName,
         PrincipalInvestigatorDOB: priDOB,
         PrincipalInvestigatorGender: priGender,
         PrincipalInvestigatorQualification: priQual,
         PrincipalInvestigatorDesignation: priDesg,
         PrincipalInvestigatorDepartment: priDept,
         PrincipalInvestigatorExperience: priExp,
         PrincipalInvestigatorEmail:priEmail,
         PrincipalInvestigatorPhoneNo: priPhone,
         PrincipalInvestigatorResidentialAddress: priAdd,

       }
       
   );
   prathiktest();
}