document.querySelector('.bg-video-content').playbackRate = 2.5;

/* Waypoint */

$('.js--about-me').waypoint(function (direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
});

var waypoint = Waypoint({
  element: document.getElementById('direction-waypoint'),
  handler: function(direction) {
    notify('Direction: ' + direction)
  }
})