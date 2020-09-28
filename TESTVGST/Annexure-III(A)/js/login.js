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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    
        const auth 		= firebase.auth();
		const temail 	= document.getElementById('temail');
		const tpassword = document.getElementById('tpassword');
		const signUp 	= document.getElementById('signUp');
		const login 	= document.getElementById('login');
		const email 	= temail.value;
		const password 	= tpassword.value;


	signUp.addEventListener('click',e =>{
		const email 	= temail.value;
		const password 	= tpassword.value;
		const auth 		= firebase.auth();
		const promise 	= auth.createUserWithEmailAndPassword(email,password);
		promise.catch(e => console.log(e.message));
		alert("Signed Up");
	});
			
	login.addEventListener('click',e =>{
		const email 	= temail.value;
		const password 	= tpassword.value;
        const auth 		= firebase.auth();
		const promise 	= auth.signInWithEmailAndPassword(email,password);
		promise.catch(e =>alert(e.message));
		alert("Signed in");
	});


	logout.addEventListener('click',e =>{		
		firebase.auth().signOut();
		alert("Signed Out");
		
	});


	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode 	 = error.code;
		var errorMessage = error.message;
	  });

	  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode    = error.code;
		var errorMessage = error.message;
	  });
	  firebase.auth().createUserWithEmailAndPassword(email, password)
				.catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				if (errorCode == 'auth/weak-password') {
					alert('The password is too weak.');
				} else {
					alert(errorMessage);
				}
				console.log(error);
		});
	
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			
			var email = firebaseUser.email;
			alert("Active User " + email);
			console.log(firebaseUser);
			
			
		}else{
			
			alert("No Active User");
		}
	});
		
	const signInWithGoogleButton = document.getElementById('signInWithGoogle');

	const signInWithGoogle = () => {
		const googleProvider = new firebase.auth.GoogleAuthProvider();
	  
		auth.signInWithPopup(googleProvider)
		.then(() => {
		  window.location.assign('./profile');
		})
		.catch(error => {
		  console.error(error);
		})
	  }
	  
	  signInWithGoogleButton.addEventListener('click', signInWithGoogle);

	  function myFunction() {
		document.getElementById("login").style.display = "none";
		document.getElementById("signUp").style.display = "block";
		document.getElementById("verifypassword").style.display = "block";
		document.getElementById("reg").style.display = "none";
		document.getElementById("start2").style.display = "block";
		document.getElementById("start1").style.display = "none";
		document.getElementById("temail").style.display = "block";
		document.getElementById("tpassword").style.display = "block";
		document.getElementById("signUp").style.display = "none";
		document.getElementById("next").style.display = "block";
		document.getElementById("otp").style.display = "none";
	  }
	  function refresh(){
		document.getElementById("login").style.display = "block";
		document.getElementById("signUp").style.display = "none";
		document.getElementById("verifypassword").style.display = "none";
		document.getElementById("reg").style.display = "inline";
		document.getElementById("start2").style.display = "none";
		document.getElementById("start1").style.display = "block";

	  }

	  function enterotp(){
		document.getElementById("verifypassword").style.display = "none";
		document.getElementById("temail").style.display = "none";
		document.getElementById("tpassword").style.display = "none";
		document.getElementById("otp").style.display = "block";
		document.getElementById("next").style.display = "none";
		document.getElementById("login").style.display = "block";
	  }
