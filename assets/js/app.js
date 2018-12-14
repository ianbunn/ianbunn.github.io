$(document).snowfall({
    round: true,
    flakeCount: 500,
    maxSpeed: 3,
    maxSize: 3
});

var title = $("#title").hide();

$(document).ready(function(){
    title.fadeIn("slow");
});