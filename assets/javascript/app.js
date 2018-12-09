
// declare our global variables - correct answers, incorrect answers, time remamining for questions, and a countdown var for running the timer and i, which is the current question number
var correct = 0;
var incorrect = 0;
var i = 0;
var timeLeft = 12;

//make an onclick button function to start the game

// Make an array of question objects, each with a question, 4 possible answers, 1 correct answer
var questionArray = [
    {
        question: "Who’s attention does Kramer try to get by slapping the table and yelping?",
        options: ["Tim Watley", "Joe DiMaggio", "Newman", "Bob Sacamano"],
        correctA: "Joe DiMaggio",
    },
    {
        question: "Why does Elaine break up with Carl the mover?",
        options: ["She got him blacklisted from the Chinese restaurant Hop Sing’s", "He finds out she bought Juju fruits before visiting him in the hospital", "She runs a poster of his favorite tenor", "He is pro life"],
        correctA: "He is pro life",
    },
    {
        question: "What is Bizzaro Newman’s name?",
        options: ["Feldman", "Vargus", "Randall", "Cedric"],
        correctA: "Vargus",
    },
    {
        question: "What is the name of Kramer’s wealthy industrialist, philanthropist, and bicyclist alter ego?",
        options: ["H.E. Pennypacker", "Dr. Martin Van Nostrand", "Kel Varnsen", "Art Vandelay"],
        correctA: "H.E. Pennypacker",
    },

    {
        question: "Where does Kramer break up with George for Allison?",
        options: ["Mendy's", "The Dream Cafe", "Poppie's", "The Pomodoro"],
        correctA: "The Pomodoro",
    },
    {
        question: "Who works at the Parks Department, looks like a horse, and usually stays home on Friday nights to watch the Nature Channel? Hint: This character does not appear on screen.",
        options: ["Bob Sacamano", "Sue Ellen Mischke", "Cousin Jeffrey", "Uncle Leo"],
        correctA: "Cousin Jeffrey",
    },
   ]

// a function to lower the time remaining variable and change the html correspondingly

   
  // function stopDecrement() {
   // clearInterval(countDown);
  //}

 


   

   


   //Set up a start timer function which runs a 12 second countdown and runs a wrong answer function when it terminates

function startTimer() {
    timeLeft = 12;
  //  $("#quizZone").prepend("<br><br>");
    $("#timer").html("Time Remaining: " + timeLeft);

    for (var k = 0; k<12; k++){
    zTimer = setTimeout(function(){
        timeLeft --;
        $("#timer").html("Time Remaining: " + timeLeft);
    }, k*1000);
    }
    
    qTimer = setTimeout(function(){ 
        wrongAnswer(); 
        $("#quizZone").html("Too slow! The correct answer was: " + questionArray[i].correctA);
    }, 12000);
}

//set up a stop timer function which cancels that countdown if the player make a choice before the timer runs out

function stopTimer() {
    clearTimeout(qTimer);
}

// if the user answer is correcct, the correct count is increased, html is updated, and a 2.2 second couunter runs until the next question is loaded

function rightAnswer() {
    correct ++;
    $("#quizZone").html("Correct!");
    stopTimer ();
    setTimeout(function(){ nextQ(); }, 2200);
   
}  

//if the user answer is incorrect, the incorrect count is increased, html is updated, and a 2.2 second couunter runs until the next question is loaded

function wrongAnswer() {
    incorrect ++;
    stopTimer();
    $("#quizZone").html("Wrong! The correct answer was: " + questionArray[i].correctA);
    setTimeout(function(){ nextQ(); }, 2200);
}  



//New question function - populates the html with questions and answered from the i variable, which tells us which question number we are on

function freshQuestion() {
    $("#quizZone").html(questionArray[i].question);
    $("#quizZone").append("<br>");
    for (var j = 0; j<questionArray[i].options.length; j++){
    $("#quizZone").append("<br>");
    $("#quizZone").append('<button class="answer-button" id="button"' + 'name="' + questionArray[i].options[j] + '">' + questionArray[i].options[j]+ '</button>');
    
    }

    // timer starts counting down
    startTimer ();
    // if an answer button is clicked, it returns it's name and the function checks to see if it matches the correctA for that question in the object array - if so it runs the right answer function, if not, it runs the wrong answer function
    $(".answer-button").click(function() {
        if (this.name === questionArray[i].correctA){
            rightAnswer ();
            }
            else {     
                $("#quizZone").html("Wrong! The correct answer was: " + questionArray[i].correctA);
                   wrongAnswer ();
                 }
                 console.log((this.name));
              })
}


// start button gets things rolling and runs the fresh question function to start the game
$("#start-button").click(function() {
    freshQuestion ();
    })

//nextQ checks to see if we still have remaining questions, if we do, we run one of them, if not we run the gameover functions
    function nextQ() {
        if (i<questionArray.length-1) {
            i++;
            console.log(i);
            freshQuestion();
        }
        else {
            $("#quizZone").html("<h3>Game Over!</h3>");
            $("#quizZone").append("<br>");
            $("#quizZone").append("Number of correct answers: " + correct);
            $("#quizZone").append("<br>");
            $("#quizZone").append("Number of incorrect answers: " + incorrect);
            $("#quizZone").append("<br>");
            $("#quizZone").append('<button id="restart-button">Restart</button>');
            $("#restart-button").click(function() {
                location.reload();
                               })
        }
        }

 $("#button").click(function() {
    if (this.name === questionArray[i].correctA){
        rightAnswer ();
        }
        else {
               wrongAnswer ();
             }
             console.log((this.name));
          })

 




  //If correct answer is chosen, correct variable is raised by one, and html alerts that 


//make function for wrong answer, incorrect ++, populate question zone with "Incorrect!" , put related image in button zone. also run this function for if timer runs out.  




// Once loop finishes all questions, have it give a summation of our score at the end

