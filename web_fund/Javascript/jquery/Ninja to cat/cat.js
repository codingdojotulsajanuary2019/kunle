$(document).ready(function(){
    console.log("document ready")

    $('img').click(function(){
        var firstSrc = $(this).attr('src');
        var altSrc = $(this).attr('data-alt-src');
        console.log(firstSrc);
        console.log(altSrc);
        if ($(this).attr('src')==firstSrc){
            $(this).attr('src', altSrc);
            $(this).attr('data-alt-src', firstSrc);
            console.log('swap');
        }
        else{
            $(this).attr('src',firstSrc);
            $(this).attr('data-alt-src', altSrc);
            console.log('swap');
        }   
    });
});