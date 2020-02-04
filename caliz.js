function registrar(){
  var email= document.getElementByID('email').value;
  var contraseña= document.getElementByID('contraseña').value;

  firebase.auth().createUserWithEmailAndPassword(email, contraseña)
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}