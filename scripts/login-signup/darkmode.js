let body = document.body;
let turnOnOffDarkMode = document.querySelector(".turn-on-darkmode input[type='checkbox']");

if(localStorage.getItem("darkmode") == "yes"){
    turnOnOffDarkMode.setAttribute("checked", "checked");
    body.classList.add("body-darkmode");

} else {
    body.classList.remove("body-darkmode");
}

turnOnOffDarkMode.onclick = ()=>{
    if(turnOnOffDarkMode.checked){
        body.classList.add("body-darkmode");
        window.localStorage.setItem("darkmode", "yes");
    
    } else {
        body.classList.remove("body-darkmode");
        window.localStorage.setItem("darkmode", "no");
    }

}

