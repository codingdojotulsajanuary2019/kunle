$(document).ready(function(){
    $('#Showemail').change(function(){
        var data = $(this).serialize()
        $.ajax({
            method: "POST",
            url: "/newUser",
            data: data
        })
        .done(function(res){
            $('#part_msg').html(res)
        })
    })
})
