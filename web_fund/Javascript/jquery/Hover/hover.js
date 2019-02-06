$(document).ready(function(){
    var init = ""
    $("img").hover(function(){
        init = $(this).attr("src");
        $(this).attr("src", "images/mean.png");
    },
        function() {
            $(this).attr("src",init);
    });
});