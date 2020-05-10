// Initialize Firebase (ADD  YOUR OWN DATA)
  var firebaseConfig = {
    apiKey: "AIzaSyA-REIZ******-VQ",
    authDomain: "contact-for******ebaseapp.com",
    databaseURL: "https://contac******irebaseio.com",
    projectId: "contact-for******",
    storageBucket: "contact-for******ppspot.com",
    messagingSenderId: "560*********",
    appId: "1:560******:web:5a8******d1d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('myForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('myForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}