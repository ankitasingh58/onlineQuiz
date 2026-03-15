     
        var quiz = [{
        	       
                   question: "1. Who is the father of C language?",
                   answers: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"],
                   correctAnswer: 2
                   }, 
                  {
                   question: "2. What does PHP stand for?",
                   answers: ["PHP stands for Preprocessor Home Page"," PHP stands for Pretext Hypertext Processor", "PHP stands for Personal Hyper Processor"," PHP stands for Hypertext Preprocessor"],
                   correctAnswer: 3
                  }, 
                  {
                   question:"3. Which of the following PHP functions can be used for generating unique ids? ",
                   answers:["md5()","uniqueid()","mdid()"," id()"],
                   correctAnswer: 1 
                  },
                  {
                   question:"4. When an array is passed to a method, what does the method receive?",
                   answers:["The reference of the array","The copy of the array ","Length of the array ","Copy of the element"],
                   correctAnswer: 0
                  },
                  {           
                   question:"5. Which statement is true about Java?",                  
                   answers:["Java is a sequence-dependent programming language","Java is a code dependent programming language"," Java is a platform-dependent programming language"," Java is a platform-independent programming language"],
                   correctAnswer: 3
                  },
                  {
                    question:"6. Who developed Python Programming Language?",
                    answers:["Wick van Rossum","Rasmus Lerdorf","Guido van Rossum","Niene Stom"],
                    correctAnswer: 2
                  },
                  {
                  	question:"7. Is Python case sensitive when dealing with identifiers?",
                    answers:["No","Machine dependent","Yes","None of the mentioned"],
                    correctAnswer: 0
                  },
                  {
                    question:"8. What will be the value of the following Python expression : 4 + 3 % 5",
                    answers:[7,2,4,1],
                    correctAnswer: 0
                  },
                  {
                  	question:"9. Arrays in JavaScript are defined by which of the following statements?",
                    answers:[" It is an ordered list of values"," It is an ordered list of objects","It is an ordered list of string","It is an ordered list of functions"],
                    correctAnswer: 0
                  },
                  {
                    question:"10. Where is Client-side JavaScript code is embedded within HTML documents?",
                    answers:[" A URL that uses the special javascript:code"," A URL that uses the special javascript:protocol","A URL that uses the special javascript:encoding","A URL that uses the special javascript:stack"],
                    correctAnswer: 1
                  },
                  {
                    question:"11. Who developed jQuery, and in which year it was first released?",
                    answers:["John Richard in 2001","Mark Bensman in 2004","John Resig in 2006","None of the above"],
                    correctAnswer: 2
                  },
                  {
                    question:"12. $(this) in jQuery is used when ",
                    answers:["an HTML element references the entire document","an HTML element references its own action","an HTML element references the action of its parent element","All of the above"],
                    correctAnswer: 1
                  },
                  {
                    question:"13. Which jQuery method is used to set one or more style properties to the selected element?",
                    answers:["The html() method","The style() method","The css() method","All of the above"],
                    correctAnswer: 2
                  },                 
                  {
                    question:"14. AngularJS is perfect for _______.",
                    answers:["Create Single Page Applications","Creating a Desktop Application","Create Web Services","None of these"],
                    correctAnswer: 0
                  },
                  {
                    question:"15. AngularJS is distributed as a _______.",
                    answers:["PHP file","JavaScript file","XML file","ASP file"],
                    correctAnswer: 1
                  },
                  {
                    question:"16. How to define a function in PHP?",
                    answers:["functionName(parameters) {function body}","function {function body}","function functionName(parameters) {function body}","data type functionName(parameters) {function body}"],
                    correctAnswer: 2
                  },
                  {
                    question:"17. Which is the right way of declaring a variable in PHP?",
                    answers:["$3hello","$_hello","$this","$5_Hello"],
                    correctAnswer: 1
                  },
                   {
                    question:"18. Which of the following is not an OOPS concept in Java?",
                    answers:["Polymorphism","Inheritance","Compilation","Encapsulation"],
                    correctAnswer: 2
                  },
                   {
                    question:"19. Which is valid C expression?",
                    answers:[" int my_num = 100,000;","int my_num = 100000;","int my num = 1000;","int $my_num = 10000;"],
                    correctAnswer: 1
                  },
                  {
                   question:"20. What is the result of logical or relational expression in C?",
                   answers:["True or False","0 or 1","0 if an expression is false and any positive number if an expression is true"," None of the mentioned"],
                   correctAnswer: 1
                  }] 
    
    var i = 0;
var score = 0;

$(document).ready(function () {
	$('#dev').hide();
	$('#res').hide();
	$('#finish').hide();
	 $('#next').hide();
    $('#start').on('click', function () {
        $('#questions').text(quiz[i].question);
        $('#zero').text(quiz[i].answers[0]);
        $('#one').text(quiz[i].answers[1]);
        $('#two').text(quiz[i].answers[2]);
        $('#three').text(quiz[i].answers[3]);
        $('#start').remove();
        $('.choices').show('slow');
        $('#next').show('slow');
        
    });
});

$(document).ready(function () {
    $(document).on('click', '#next', function () {
        var answer = $('input[name="answers"]:checked').val();
        var correctAnswer = quiz[i].correctAnswer;
        if (answer == quiz[i].correctAnswer) {
            score++;
        } 
        if (!$('input[name="answers"]').is(':checked')) {
            alert("please make a choice");
            return undefined; 
        }
        i++;
        if (i < 20) {
            $('.choices').css('display', 'none');
            $('#questions').text(quiz[i].question);
            $('#zero').text(quiz[i].answers[0]);
            $('#one').text(quiz[i].answers[1]);
            $('#two').text(quiz[i].answers[2]);
            $('#three').text(quiz[i].answers[3]);
            $('.choices').show('slow');
            $('input[name="answers"]').prop('checked', false);
        }
               	
          if (i >19) {
            $('#quiz').remove();
            $('#next').remove();
            $('#time').remove();
            $('#dev').show();
            $('#res').show();
            $('#score').text("You have completed the quiz,your score is " + score);//score*(100/i)
            $('#results').fadeIn('fast');
        }

    });
});