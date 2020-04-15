function jala(){
	// login
var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result){
            console.log(result.user);
        });
}
