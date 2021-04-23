//document.getElementById("techtopia-video").onended = function () { myFunction() };

//function myFunction() {
//    var x = document.getElementById('pr-kitchen-div');
//    if (x.style.display === 'none') {
//        x.style.display = 'block';
//    } else {
//        x.style.display = 'none';
//    }
//}

$(document).ready(function () {
    initChat("2c9faa3576a61f910176b528e41e1826");
})

//scroll to top when a div link is clicked
document.querySelectorAll('.home-div-link').forEach(linkItem => {
  linkItem.addEventListener('click', _ => {
    window.scrollTo(0, 0)
  })

})

//timer
var countDownDate = new Date("Feb 9, 2021 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = hours + " : " + minutes + " : " + seconds + "";
}, 1000);

