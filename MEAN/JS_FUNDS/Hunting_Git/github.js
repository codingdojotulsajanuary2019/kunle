$(document).ready(function(){
    $('button').click(function(){
        $.get("https://api.github.com/users/kunle05", displayName)
    });
    function displayName(data){
        console.log(data);
        if (data.name == null){
            console.log(data.name);
            $('h6').html("Username is empty");
        }
        else{
            $('h6').html(data.name);
        }
    }
})