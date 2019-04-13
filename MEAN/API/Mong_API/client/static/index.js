$(document).ready(function(){

    $.get("/bingo", display);

    function display(data){
        var data = data;

        for(var idx in data.bingos){
            $('#show').append(`
                <tr class="${idx}"> 
                    <td><a href="" class="abingo" idx="${idx}">${data.bingos[idx].name}</a></td>
                    <td>${data.bingos[idx].meals}</td>
                    <td>${data.bingos[idx].age}</td>
                    <td><a href="/bingo/edit/" class="edit" idx="${idx}">Edit</a>  |  <a href="/bingo/destroy/" class="delete" idx="${idx}">Delete</a> </td>
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

                $('.newbingo').submit(function(event){
                    event.preventDefault();
                    console.log("form submitted");
                    $.post('/bingo', $('form').serialize(), function(res){
                        if(typeof res == "object"){
                            for(let x in res.error.errors){
                                $('#errors').append(`<p class="text-danger m-0">${res.error.errors[x].message}</p>`);
                            }
                            console.log("Unsuccessful");
                        }
                        else{
                            $('.formbody').html('<h3 class="text-success">Bingo Successfully Added</h3>')
                        }
                    })
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

                let id = data.bingos[idx]._id;
                $('#editBingo').submit(function(e){
                    e.preventDefault();                   
                    $.post(`/${id}`, $('form').serialize(), function(res){
                        if(typeof res == "object"){
                            for(let x in res.error.errors){
                                $('#errors').append(`<p class="text-danger m-0">${res.error.errors[x].message}</p>`);
                            }
                        }
                        else{
                            $('.theform').html('<h3 class="text-success">Edit Successfull</h3>')
                        }
                    })
                })
            })
        })
                   
        $('.delete').click(function(e){
            e.preventDefault();
            idx = $(this).attr('idx');
            console.log(idx);
            let id = data.bingos[idx]._id;

            $.ajax({url : `/destroy/${id}`, type: "delete", function(res){
                console.log("Its working");
                console.log(res["status"])
                if(res["status"] == "false"){
                    $('#errors').append(`<p class="text-danger m-0">Delete was unsuccessful</p>`);
                    console.log(res);
                }
                else{
                    $(`.${idx}`).remove();
                }
            }})  
        })   
    }
})