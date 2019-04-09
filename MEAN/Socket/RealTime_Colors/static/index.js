$(document).ready(function() {
    var socket = io();
    socket.on('background', function(data){
        $('body').css("background-color", data.color);
    })
    $('button').click(function() {
        bclick = $(this).attr('id');
        console.log(bclick);
        socket.emit('color', {color : bclick});
    })
})