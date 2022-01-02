import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_csb12NMusiY36GiELVTjCJm1XKp4nBs",
  authDomain: "authentication-practice-c5a1f.firebaseapp.com",
  projectId: "authentication-practice-c5a1f",
  storageBucket: "authentication-practice-c5a1f.appspot.com",
  messagingSenderId: "276023611911",
  appId: "1:276023611911:web:20da52981c3dc588b9d0a2",
  measurementId: "G-6HYZHP2W3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

let passwordInput = document.querySelector(".password-input>input[type=password]");
let passwordBlock = document.querySelector(".password-input");
let emailInput = document.querySelector(".email-input>input[type=email]");
let emailBlock = document.querySelector(".email-input");
let confirmPasswordInput = document.querySelector(".confirm-password>input[type=password]");
let confirmPasswordBlock = document.querySelector(".confirm-password")
let signupBtn = document.querySelector(".signup-btn");


signupBtn.onclick = ()=>{
    /* handleEmail();
    handlePassword();
    handleConfirmPassword(); */
    if(handleEmail() && handlePassword() && handleConfirmPassword()){
        let email = emailInput.value;
        let password = passwordInput.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Sign Up successfully!")
            // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Error: " + errorMessage)
           // ..
        });
    }
    
}


const handlePassword = ()=>{
    if(passwordInput.value.length < 8){
        let text = document.createElement("I");
        text.textContent = "The password must contain at least 8 characters";
        if(document.querySelector(".password-input>i") != null){
            document.querySelector(".password-input>i").remove();
        }
        passwordBlock.appendChild(text);
        passwordInput.style.border = "3px solid red";
        return false;
    } else{
        if(document.querySelector(".password-input>i") != null){
            document.querySelector(".password-input>i").remove();
            passwordInput.style.border = "1px solid #ced4da";
        }
        return true;
    }
}

const handleEmail = ()=>{
    if(!validateEmail(emailInput.value)){
        let text = document.createElement("I");
        text.textContent = "Invalid email address";
        if(document.querySelector(".email-input>i") != null){
            document.querySelector(".email-input>i").remove();
        }
        emailBlock.appendChild(text);
        emailInput.style.border = "3px solid red";
        return false;
    } else {
        if(document.querySelector(".email-input>i") != null){
            document.querySelector(".email-input>i").remove();
            emailInput.style.border = "1px solid #ced4da";
        }
        return true;
    }
}
 
const handleConfirmPassword = ()=>{
    if(confirmPasswordInput.value != passwordInput.value){
        let text = document.createElement("I");
        text.textContent = "The password doesn't match!!!";
        if(document.querySelector(".confirm-password>i") != null){
            document.querySelector(".confirm-password>i").remove();
        }
        confirmPasswordBlock.appendChild(text);
        confirmPasswordInput.style.border = "3px solid red";
        return false;
    } else {
        if(document.querySelector(".confirm-password>i") != null){
            document.querySelector(".confirm-password>i").remove();
            confirmPasswordInput.style.border = "1px solid #ced4da";
        }
        return true;
    }
}

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};