var usersAnswers = [];

$("#start").on("click",function(){
    game.start();
    $(document).on("click", ".answer-button", function(){
        var userAnswer = $(this).val().trim();
        usersAnswers.push(userAnswer);
        console.log(usersAnswers);
    })
});

var questions = [{
    question:"A, B, or C?",
    answers:["A", "B", "C"],
    correctAnswer:"A"
},
{
    question:"Are you a morning person, and night owl, or a zombie?",
    answers:["morning person", "night owl", "zombie"],
    correctAnswer:"zombie"
},
{
    question:"How awesome is programming?",
    answers:["eh, it's ok", "it's the bees knees", "it's the best thing since sliced bread!"],
    correctAnswer:"it's the bees knees"
}]

// game object stores score and has timer function (method)
var game = {
    correct: 0,
    incorrect: 0,
    counter:4,
    Unanswered: 0,
    countdown: function(){

        
        if(game.counter<=0){
            console.log("time's up!");
            game.tally();
        } else if (game.counter>0){
            game.counter--;
            $("#counter").html(game.counter);
        }
        
    },
    start: function(){
        timer = setInterval(game.countdown,1000);

        $("#subwrapper").prepend(
            '<h2>Time remaining: <span id="counter">4</span> Seconds</h2>'
            );

        $("#start").remove(); // we don't need the start button once we've already started

        for(var i = 0; i < questions.length; i++){
            $("#subwrapper").append('<h2>'+questions[i].question + '</h2>');
            for(var j=0; j<questions[i].answers.length; j++){
                $("#subwrapper").append("<button id='question-"+i+"' class='answer-button' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
            }
        } 
        
    },

    timer: function(){
        if (time === 0){
            clearInterval(counter);
            $("#counter").clear();
        } counter--;
    },
    tally: function(){
        if (usersAnswers.length !== questions.length){
            game.Unanswered = questions.length-usersAnswers.length;
            for (var i = 0; i<questions.length; i++){
                if (usersAnswers[i]===questions[i].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            }
        } else if (usersAnswers.length === questions.length){
            for (var i = 0; i<questions.length; i++){
                if (usersAnswers[i]===questions[i].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            }
        } 
        game.result();
    },
   
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>Here's the tally!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + game.correct + "</h3>");
         $('#subwrapper').append("<h3>Incorrect Answers: "+game.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + game.Unanswered + "</3>");
        console.log("result fxn triggered");
        console.log(game.correct, "game.correct");
        console.log(game.incorrect, "game.incorrect");
    }
}

