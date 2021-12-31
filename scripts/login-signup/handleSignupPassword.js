
let password = document.querySelector(".password-input>input[type=password]");
let passwordBlock = document.querySelector(".password-input");
let signupBtn = document.querySelector(".signup-btn");
let email = document.querySelector(".email-input>input[type=email]");
let emailBlock = document.querySelector(".email-input");

signupBtn.onclick = ()=>{
    handleEmail();
    handlePassword();
    handleConfirmPassword();
    
}


let handlePassword = ()=>{
    let text = document.createElement("I");
    text.textContent = "The password must contain at least 8 characters";
    if(password.value.length < 8){
        if(document.querySelector(".password-input>i") != null){
            document.querySelector(".password-input>i").remove();
        }
        passwordBlock.appendChild(text);
        password.style.border = "1px solid red";
    } else{
        if(document.querySelector(".password-input>i") != null){
            document.querySelector(".password-input>i").remove();
            password.style.border = "1px solid #ced4da";
        }
    }
}

let handleEmail = ()=>{
    console.log(validateEmail(email.value))
    if(!validateEmail(email.value)){
        let text = document.createElement("I");
        text.textContent = "The password must contain at least 8 characters";
        if(document.querySelector(".email-input>i") != null){
            document.querySelector(".email-input>i").remove();
        }
        emailBlock.appendChild(text);
        email.style.border = "1px solid red";
    } else {
        if(document.querySelector(".email-input>i") != null){
            document.querySelector(".email-input>i").remove();
            email.style.border = "1px solid #ced4da";
        }
    }
}
 
let handleConfirmPassword = ()=>{

}

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};