$(document).ready(function(){

    $("#productForm").submit(function(event){
        event.preventDefault()
        console.log("submitted")

        $.ajax({
            method: "POST",
            url: $(this).attr('action'),
            data : $("#qty").serialize()    
        })
        .done(function(res){
            $('#part_msg').html(res).delay(5000).fadeOut();
        })
    })
})