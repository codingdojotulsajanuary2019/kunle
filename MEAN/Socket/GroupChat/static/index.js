$(document).ready(function() {
    var name = prompt("Please enter your name");
    console.log(name);
    if(name == null || name == ""){
        location.reload();
    }
    else{
        var socket = io();
        socket.on('messages', function(data) {
            for(let x in data.allmessages){
                $('.allMsg').append(`<p class="text-light mb-0">
                    <span class="font-weight-light font-italic text-warning">${data.allmessages[x].name}:</span> ${data.allmessages[x].message}
                </p>`)
            }
        });

        socket.on('aMessage', function(data) {
            console.log(data.message.name);
            $('.allMsg').append(`<p class="text-light mb-0">
                <span class="font-weight-light font-italic text-warning">${data.message.name}:</span> ${data.message.message}
            </p>`)
        })

        $('button').click(function() {
            let message = $('.msg').val();
            socket.emit('newMessage', {
                name : name,
                message : message
            });
            $('.msg').val('');
        });
    }
});