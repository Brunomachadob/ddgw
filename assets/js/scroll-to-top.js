
var scrollTopButton = document.getElementById("scroll-to-top-btn");
var header = document.getElementsByClassName('page-header')[0];

var scrollThreshold = header.clientHeight;

scrollTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

window.onscroll = onScroll;

onScroll();

function onScroll() {
  if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
    scrollTopButton.style.opacity = "1";
  } else {
    scrollTopButton.style.opacity = "0";
  }
}


