$(document).ready(function(){
    $('#ShowTitle').change(function(){
        var data = $('#AddShow').serialize()
        $.ajax({
            method: "POST",
            url: "/shows/create",
            data: data
        })
        .done(function(res){
            $('#part_msg').html(res)
        })
    })
})

                