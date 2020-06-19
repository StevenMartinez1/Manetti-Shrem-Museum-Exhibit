var enddate = new Date("May 10, 2020 17:00:00").getTime();

setInterval(function(){
  
  var now = new Date().getTime();
  var timeleft = enddate - now;
  var seconds = Math.floor(timeleft / 1000);
  
  document.getElementById("counter").textContent = seconds.toLocaleString();
  
},1000);


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var pic = document.getElementsByClassName("pic");
  var circle = document.getElementsByClassName("cirlce");
  if (n > pic.length) {slideIndex = 1}
  if (n < 1) {slideIndex = pic.length}
  for (i = 0; i < pic.length; i++) {
      pic[i].style.display = "none";
  }
  for (i = 0; i < circle.length; i++) {
      circle[i].className = circle[i].className.replace(" active", "");
  }
  pic[slideIndex-1].style.display = "block";
  circle[slideIndex-1].className += " active";
}

