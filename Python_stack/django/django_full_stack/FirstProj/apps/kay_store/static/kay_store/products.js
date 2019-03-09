$(document).ready(function(){
    $("#addcat").hide();

    $("#add_cat").click(function(event){
        $("#addcat").toggle()
        event.preventDefault();
    })
})