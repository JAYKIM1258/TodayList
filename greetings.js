const loginForm =  document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const $h1 = document.querySelector("h1");
const $greet = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubimt(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreeting(userName);
}

function paintGreeting(username){
    $h1.classList.toggle(HIDDEN_CLASSNAME);
    $h1.innerHTML = "Hello, "+username;
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if(!saveUserName){
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubimt);
}else{
    paintGreeting(saveUserName);
}