$("#start").on("click",function(){
    for(var i=0; i<questions.length; i++){
        $("#subwrapper").append('<h2>'+questions[i].question + '</h2>');
        for(var j=0; j<questions[i].answers.length; j++){
            $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
        }
    }
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