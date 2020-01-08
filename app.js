function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  console.log(targetPosition);
  console.log(startPosition);
  console.log(distance);

  function animation(currentTime) {
    if (startTime == null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  ease = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
}

// smoothScroll(".section2", 1000);

var introLink = document.querySelector(".introLink");
var svgLink = document.querySelector(".svgLink");
var paintLink = document.querySelector(".paintLink");
var lineLink = document.querySelector(".lineLink");

introLink.addEventListener("click", function() {
  smoothScroll(".introSection", 1000);
  // Make the last clickes link unactive, and this active
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});

svgLink.addEventListener("click", function() {
  smoothScroll(".svgSection", 1000);
  // Make the last clickes link unactive, and this active
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});

paintLink.addEventListener("click", function() {
  smoothScroll(".paintSection", 1000);
  // Make the last clickes link unactive, and this active
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});

lineLink.addEventListener("click", function() {
  smoothScroll(".lineSection", 1000);
  // Make the last clickes link unactive, and this active
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
