$("#start").on("click",function(){
    game.start();
})

var questions = [{
    question:"first full length movie?",
    answers:["bug's life", "toy story", "lion king"],
    correctAnswer:"toy story"
},
{
    question:"first full length movie?",
    answers:["bug's life", "toy story", "lion king"],
    correctAnswer:"toy story"
},
{
    question:"first full length movie?",
    answers:["bug's life", "toy story", "lion king"],
    correctAnswer:"toy story"
}]

// game object stores score and has timer function (method)
var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("time's up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time remaining: <span id="counter">20</span> Seconds</h2>')
        $("#start").remove(); // we don't need the start button once we've already started
        for(var i=0; i<questions.length; i++){
            $("#subwrapper").append('<h2>'+questions[i].question + '</h2>');
            for(var j=0; j<questions[i].answers.length; j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
            }
        }
    },
    done: function(){
        $.each($('input[name="question-0]":checked'), function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'), function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</3>");
    }
}