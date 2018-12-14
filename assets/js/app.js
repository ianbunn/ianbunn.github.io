$("html").snowfall({
    flakeCount: 500,
    maxSpeed: 3,
    maxSize: 2,
    flakeIndex: 1
});

var title = $("#title").hide();

$(document).ready(function(){
    title.fadeIn("slow");
});