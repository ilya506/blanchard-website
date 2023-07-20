const body = document.body;
document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("burger-btn").addEventListener("click",function(){
    document.querySelector("header").classList.toggle("open");
    body.classList.toggle('stop-scroll');
  })
});



