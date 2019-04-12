$(document).ready(function(){

    $.get("/bingo", display);

    function display(data){
        var data = data;

        for(var idx in data.bingos){
            $('#show').append(`
                <tr> 
                    <td><a href="" class="abingo" idx="${idx}">${data.bingos[idx].name}</a></td>
                    <td>${data.bingos[idx].meals}</td>
                    <td>${data.bingos[idx].age}</td>
                    <td><a href="/bingo/edit/" class="edit" idx="${idx}">Edit</a>  |  <a href="/bingo/destroy/" class="delete">Delete</a> </td>
                </tr>
            `)
        }

        $('.abingo').click(function(e){
            e.preventDefault();
            idx = $(this).attr('idx');

            $.get("/abingo.html", function(res){
                $('.wrapper').html(res);     
                
                $('.thisbingo').append(`
                    <p><span class="col-sm-3 font-weight-bold">Name:</span>${data.bingos[idx].name}</p>
                    <p><span class="col-sm-3 font-weight-bold">Favorite Meal:</span>${data.bingos[idx].meals}</p>
                    <p><span class="col-sm-3 font-weight-bold">Age:</span>${data.bingos[idx].age}</p>
                    <p><span class="col-sm-3 font-weight-bold">Created At:</span>${data.bingos[idx].createdAt}</p>
                `)
            })
        })

        $('.addnew').click(function(e){
            e.preventDefault();
            $.get("/newbingo.html", function(res){
                $('.wrapper').html(res);
                console.log($('.wrapper').children())

                $('.newbingo').submit(function(event){
                    event.preventDefault();
                    console.log("form submitted");
                })
            });            
        })
                    
        $('.edit').click(function(e){
            e.preventDefault();
            idx = $(this).attr('idx');
            console.log(idx);

            $.get("/bingo.html", function(res){
                $('.wrapper').html(res);              
                $('#name').val(`${data.bingos[idx].name}`);
                $('#meals').val(`${data.bingos[idx].meals}`);
                $('#age').val(`${data.bingos[idx].age}`);
            })
        })
    }
})