function registrar(){
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;

  console.log(email);
  console.log(contrasena);

  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}