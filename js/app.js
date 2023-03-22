function myFunction(x) {
  x.classList.toggle("change");
}


mybutton = document.getElementById("myBtn");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(window).scroll(function() {
  if ($(window).scrollTop() > 20) {
      $('#navBar').addClass('floatingNav');
  } else {
      $('#navBar').removeClass('floatingNav');
  }
});