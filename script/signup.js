subButton=document.querySelector("#subButton")
// Numin=document.querySelector("#numin")
subButton.addEventListener("click",function(){
    Numin=document.querySelector("#numin").value
    console.log(Numin)
if(Numin==""){
    alert("Plese Enter Valid Nmbber")
}else{
    localStorage.setItem("Num1",JSON.stringify(Numin))
    window.location.replace("signupOTP.html");
}

})


// OTPin=document.querySelector("#sinupdiv>input>p>input")
// OTPin.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
     
//         if(OTPin.value==1234){
//             alert("Login succesfull")
//         }
//     }
// })
