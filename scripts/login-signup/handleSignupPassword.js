import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const firebaseConfig = {
    apiKey: "AIzaSyD_csb12NMusiY36GiELVTjCJm1XKp4nBs",
    authDomain: "authentication-practice-c5a1f.firebaseapp.com",
    projectId: "authentication-practice-c5a1f",
    storageBucket: "authentication-practice-c5a1f.appspot.com",
    messagingSenderId: "276023611911",
    appId: "1:276023611911:web:20da52981c3dc588b9d0a2",
    measurementId: "G-6HYZHP2W3S"
  };
  

let password = document.querySelector(".password-input>input[type=password]");
let passwordBlock = document.querySelector(".password-input");
let email = document.querySelector(".email-input>input[type=email]");
let emailBlock = document.querySelector(".email-input");
let confirmPassword = document.querySelector(".confirm-password>input[type=password]");
let confirmPasswordBlock = document.querySelector(".confirm-password")
let signupBtn = document.querySelector(".signup-btn");

const auth = getAuth();

signupBtn.onclick = ()=>{
    /* handleEmail();
    handlePassword();
    handleConfirmPassword(); */
    if(handleEmail() && handlePassword() && handleConfirmPassword()){
        createUserWithEmailAndPassword(auth, email.value , password).value
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            // ..
        });
  console.log("hello")
    }
}


const handlePassword = ()=>{
    if(password.value.length < 8){
        let text = document.createElement("I");
        text.textContent = "The password must contain at least 8 characters";
        if(document.querySelector(".password-input>i") != null){
            document.querySelector(".password-input>i").remove();
        }
        passwordBlock.appendChild(text);
        password.style.border = "3px solid red";
        return false;
    } else{
        if(document.querySelector(".password-input>i") != null){
            document.querySelector(".password-input>i").remove();
            password.style.border = "1px solid #ced4da";
        }
        return true;
    }
}

const handleEmail = ()=>{
    if(!validateEmail(email.value)){
        let text = document.createElement("I");
        text.textContent = "Invalid email address";
        if(document.querySelector(".email-input>i") != null){
            document.querySelector(".email-input>i").remove();
        }
        emailBlock.appendChild(text);
        email.style.border = "3px solid red";
        return false;
    } else {
        if(document.querySelector(".email-input>i") != null){
            document.querySelector(".email-input>i").remove();
            email.style.border = "1px solid #ced4da";
        }
        return true;
    }
}
 
const handleConfirmPassword = ()=>{
    if(confirmPassword.value != password.value){
        let text = document.createElement("I");
        text.textContent = "The password doesn't match!!!";
        if(document.querySelector(".confirm-password>i") != null){
            document.querySelector(".confirm-password>i").remove();
        }
        confirmPasswordBlock.appendChild(text);
        confirmPassword.style.border = "3px solid red";
        return false;
    } else {
        if(document.querySelector(".confirm-password>i") != null){
            document.querySelector(".confirm-password>i").remove();
            email.style.border = "1px solid #ced4da";
        }
        return true;
    }
}

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};