$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();

        survey = {
            name : $('#name').val(),
            location : $('#location').val(),
            language : $('#lang').val(),
            comment : $('#comment').val(),
        }             
        var socket = io();
        socket.emit('survey', survey);
        socket.on('updated_message', function(data) {
            $('.msg').html(
                `<p>${data.message}</p>
                <p>${data.number}</p>`
            )
        })
    })
})