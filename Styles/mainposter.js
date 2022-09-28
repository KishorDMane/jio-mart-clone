let buttonleft=document.querySelector("#slideLeft")
  let buttonright=document.querySelector("#slideRight")
  console.log("ASDF")
  
  buttonleft.addEventListener("click",function(){
      document.querySelector(".slider2").scrollLeft -= 180
  })
  buttonright.addEventListener("click",function(){
      
      document.querySelector(".slider2").scrollLeft += 180
  })