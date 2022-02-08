
const form = document.getElementById('form');
const name = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const comments = document.getElementById('comments');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();

});

function checkInputs(){
    //get the values from the inputs 
const usernameValue = username.value.trim();
const emailValue =  email.value.trim();
const numberValue =  number.value.trim();
const commentsValue =    comments.value.trim();

if(nameValue === '') {
    //show error
    //add error class
    setErrorFor(username, 'name cannot be blank');
} else {
    // add success class
    setSuccessFor(username);

  }
}

function setErrorFor(input, message) {
  const formbox = input.parentElement; // .form-box
  const small = formbox.querySelector('small');

  //add error message inside small
  small.innerText = message;

  //add error class
  formbox.className = 'form-box error';
}

window.addEventListener("DOMContentLoaded", function () {
// get the form elements defined in your form HTML above

var form = document.getElementById("my-form");
// var button = document.getElementById("my-form-button");
var status = document.getElementById("status");

// Success and Error functions for after the form is submitted

function success() {
form.reset();
status.classList.add("success");
status.innerHTML = "Thanks!";
}

function error() {
status.classList.add("error");
status.innerHTML = "Oops! There was a problem.";
}

// handle the form submission event

form.addEventListener("submit", function (ev) {
ev.preventDefault();
var data = new FormData(form);
ajax(form.method, form.action, data, success, error);
});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function () {
if (xhr.readyState !== XMLHttpRequest.DONE) return;
if (xhr.status === 200) {
success(xhr.response, xhr.responseType);
} else {
error(xhr.status, xhr.response, xhr.responseType);
}
};
xhr.send(data);
}
