$(document).snowfall({
    round: true,
    shadow: true,
    flakeCount: 500,
    maxSpeed: 3,
    maxSize: 2
});

var title = $("#title").hide();

$(document).ready(function(){
    title.fadeIn("slow");
});