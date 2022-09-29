let buttonleft=document.getElementsByClassName("slideLeft")
  let buttonright=document.getElementsByClassName("slideRight")
  console.log("ASDF")
  
  buttonleft.addEventListener("click",function(){
      document.getElementsByClassName("slider2").scrollLeft -= 180
  })
  buttonright.addEventListener("click",function(){
      
      document.getElementsByClassName(".slider2").scrollLeft += 180
  })