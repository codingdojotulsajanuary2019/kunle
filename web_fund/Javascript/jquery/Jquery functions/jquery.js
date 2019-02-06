$(document).ready(function(){
    console.log("document ready")

    $('button.down').click(function(){
        console.log("button press")
        $('p.down').slideDown("slow", function(){
            console.log("slide down");
        });
    });

    $('button.up').click(function(){
        console.log("button press")
        $('p.down').slideUp("slow", function(){
            console.log("slide up");
        });
    });

    $('button.toggle').click(function(){
        console.log("button press")
        $('p.toggle').slideToggle("slow", function(){
            console.log("slide toggle");
        });
    });

    $('button.attr').click(function(){
        console.log("button press")
        $('p.attr').attr("href", "background-color:red")
            console.log("attr");
    });

    $('button.hide').click(function(){
        console.log("button press")
        $('p.hide').hide()
            console.log('hide');
    });
    $('button.show').click(function(){
        console.log("button press")
        $('p.hide').show()
            console.log('show');
    });
    $('button.toggle').click(function(){
        console.log("button press")
        $('p.toggle').toggle()
            console.log('toggle');
    });
    $('button.fIn').click(function(){
        console.log("button press")
        $('p.fade').fadeIn()
            console.log('fade in');
    });
    $('button.fOut').click(function(){
        console.log("button press")
        $('p.fade').fadeOut()
            console.log('fade out');
    });
    $('button.adClas').click(function(){
        console.log("button press")
        $('p.turnRed').addClass('red')
            console.log('fade out');
    });

    $('button.after').click(function(){
        console.log("button press")
        $('p.after').after("add more text ")
            console.log("after");
    });

    $('button.before').click(function(){
        console.log("button press")
        $('p.before').before("add more text ")
            console.log("before");
    });

    $('button.val').click(function(){
        console.log("button press")

        // var text = $(this).text();
        var valValues = $('#single').val();
        $('p.val').html("<b>Your have decided to kill all: </b>" + valValues);
            console.log("val");
            console.log(valValues);
    });

    $('button.html').click(function(){
        console.log("button press")
        $('p.html').html("<h1>change the html</h1>")
            console.log("html");
    });

    $('button.text').click(function(){
        console.log("button press")
        $('p.text').text("<h1>change the text</h1> (notice the html tags)")
            console.log("text");
    });

});