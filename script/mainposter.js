let buttonleft=document.querySelector("#slideLeft")
  let buttonright=document.querySelector("#slideRight")
  
  
  buttonleft.addEventListener("click",function(){
      document.querySelector(".slider2").scrollLeft -= 600
  })
  buttonright.addEventListener("click",function(){
      
      document.querySelector(".slider2").scrollLeft += 600
  })



  
