$(document).ready(function() {
    var socket = io();

    $('#addCount').click(function() {
        socket.emit('count', {count: 1});
        socket.on('alluser', function(data) {
            $('#msg').html(`The button has been pushed ${data.count} time(S)`);
        })

        $('#reset').click(function() {
            socket.emit('count', {count: "reset"});
        })
        socket.on('alluser2', function(data) {
            $('#msg').html(`The button has been reset`);
        })
    });  
});