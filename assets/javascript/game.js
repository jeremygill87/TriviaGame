$(document).ready(function() {

    var triviaBlocks = [
        {
            question: "What did that obnoxiously smug kid in the beginning say the velociraptor skeleton looked like?",
            choices: ["A person", "An ostrich", "A six-foot turkey", "His probably absentee father"],
            answer: 2,
            photo: "./images/turkey.gif"
        },
        {
            question: "Where did the scientists at Jurassic Park get the DNA to replicate the dinosaurs?",
            choices: ["Fossilized bones", "Fossilized eggs", "Loch Ness Monster", "Fossilized amber"],
            answer: 3,
            photo: "./images/bingo-dino-dna.gif"
        }
    ];
    var timer = 20;
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var randomizer = Math.floor(Math.random() * triviaBlocks.length);

    $("#play").on("click", function() {
        displayQuestion();
        countdown();
    })
    
    function displayQuestion() {
        $("question-box").html("<h2>" + triviaBlocks[randomizer].question + "</h2>");
        $("answers-box").html("<h4>" + triviaBlocks[randomizer].choices + "</h4>");
        console.log (triviaBlocks[randomizer].question + "   " + triviaBlocks[randomizer].choices + "   " + triviaBlocks[randomizer].answer)
    }

    function countdown () {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        timer--;
        $("#timer").html("<h3> " + timer + "</h3>");
        if (timer === 0) {
            stop();
            $("answer-box").html("<img src= './images/must-go-faster.gif'>");
        }
    }
    function stop() {
        clearInterval(intervalId);
    }

});
