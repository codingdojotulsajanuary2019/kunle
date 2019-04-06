$(document).ready(function(){
    $.get("https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple", display1);
    // $.get("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple", display2);
    // $.get("https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=boolean", display3);


    function display1(data){
        var data = data;
        var point = 100;
        EarnedPoint = 0;
      
        for(var idx in data.results){
            $('#cat').append(`
                <div class="mybox container rounded col-12 bg-secondary mb-4 p-2" value=${idx}>
                    <h2 class="container mt-3 ml-1 text-center text-warning">${point}</h2>
                </div>            
            `)
            point += 50;
        }

        $('.mybox').click(function(){
            let idx = $(this).attr('value');
            $(this).html(`
                <div class="bigbox container rounded col-12 bg-secondary mb-4 p-2 text-warning" value=${idx}>
                    <p>${data.results[idx].question}</p>
                    <input type="radio" class="answer" value="${data.results[idx].incorrect_answers[0]}"> ${data.results[idx].incorrect_answers[0]}<br>
                    <input type="radio" class="answer" value="${data.results[idx].incorrect_answers[2]}"> ${data.results[idx].incorrect_answers[2]}<br>
                    <input type="radio" class="answer" value="${data.results[idx].correct_answer}"> ${data.results[idx].correct_answer}<br>
                    <input type="radio" class="answer" value="${data.results[idx].incorrect_answers[1]}"> ${data.results[idx].incorrect_answers[1]}
                </div>
            `);
            
            $(':input.answer').click(function(){
                console.log("clicked");
                console.log($(this).val());
                const score = [100, 150, 200, 250, 300];
                
                if($(this).val() === data.results[idx].correct_answer){
                    EarnedPoint += score[idx];
                    console.log("CORRECT!");
                    $('.point').html(`<h4>${EarnedPoint} POINTS</h4>`)
                    // $('.bigbox').html(`<h2 class="container mt-3 ml-1 text-center text-warning">CORRECT!!</h2>`)
                    console.log($(this).parent("div"));
                    $(this).parent('div').html(`<h2 class="container mt-3 ml-1 text-center text-warning">CORRECT!!</h2>`)
                }
                else
                {
                    EarnedPoint -= 50;
                    console.log("INCORRECT!");
                    $('.point').html(`<h4>${EarnedPoint} POINTS</h4>`)
                    $('.bigbox').html(`<h2 class="container mt-3 ml-1 text-center text-danger">WRONG!!</h2>`)
                }
            });
        });
    }
});
