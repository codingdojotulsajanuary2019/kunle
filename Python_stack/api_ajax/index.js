
$(document).ready(function(){

    for (var i =1; i < 151; i++){
      
    $.ajax({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/'+i,
        // data: data,
        dataType: 'json',
        success: function(res) {
            // get the info form the request
            console.log(res);
            $('div').append(`<img src=${res.sprites.front_shiny} alt='pokemon'>`);
        },
        error: function(err) {
            // server error
        },
        complete: function(next) {
            // regardless of success or error, this will run
            console.log('in done method');
        }
    })
    console.log('after the ajax method');
}

})


