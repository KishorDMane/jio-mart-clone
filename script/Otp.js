subButton1=document.querySelector("#subButton1")
input1=document.querySelector("#Otp1")
console.log(input1.value)
NUMBER1=JSON.parse(localStorage.getItem("Num1"))
document.querySelector("#numin").value=NUMBER1
subButton1.addEventListener("click",function(){
    if(input1.value==1234){
        alert("Login Succesfull")
        window.location.replace("index.html")
    }else{
        alert("Enter valid OTP")
    }



console.log("ABC")
})