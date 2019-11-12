$(document).ready(function () {

    $("#play").on("click", function () {
        game.displayQuestion();
    });

    $(document).on("click", "#choices-button", function (x) {
        game.selected(x);
    });

    $("#reset").on("click", function () {
        game.reset();
    });

    var trivia = [
        {
            question: "What did that obnoxiously smug kid in the beginning say the velociraptor skeleton looked like?",
            answers: ["A person", "An ostrich", "A six-foot turkey", "His probably absentee father"],
            correctAnswer: "A six-foot turkey",
            image: "assets/images/turkey.gif"
        },
        {
            question: "Where did the scientists at Jurassic Park get the DNA to replicate the dinosaurs?",
            answers: ["Fossilized bones", "Fossilized eggs", "Loch Ness Monster", "Fossilized amber"],
            correctAnswer: "Fossilized amber",
            image: "assets/images/bingo-dino-dna.gif"
        },
        {
            question: "What is Ian Malcolm's profession?",
            answers: ["Mathematician", "Philosopher", "Chaotician", "Sex Symbol"],
            correctAnswer: "Chaotician",
            image: "assets/images/chaotician.gif"
        },
        {
            question: "What is the name of the fictional island Jurassic Park is located on?",
            answers: ["San Lorenzo", "Isla Nublar", "Koholint Island", "Greenland"],
            correctAnswer: "Isla Nublar",
            image: "assets/images/there_it_is.gif"
        },
        {
            question: "John Hammond tells everyone that his first ever attraction was what?",
            answers: ["An island full of murderous prehistoric lizards","A flea circus","A Wild West theme park with robots","Euro-Disney"],
            correctAnswer: "A flea circus",
            image: "assets/images/flea-circus.gif"
        },
        {
            question: "Why can't the dinosaurs on the island reproduce?",
            answers: ["They're all male","Dinosaur contraceptives", "Lack of attraction", "They are all female"],
            correctAnswer: "They are all female",
            image: "assets/images/skirts.gif"
        },
        {
            question: "What kind of dinosaur is found to be sick early in the park tour?",
            answers: ["Triceratops","Stegosaurus","Iguanadon","Dilophosaurus"],
            correctAnswer: "Triceratops",
            image: "assets/images/sick-trike.gif"
        },
        {
            question: "How did Dr. Sattler figure out what was wrong with the sick dinosaur?",
            answers: ["She ran a diagnostic test","She gave it a physical","She investigated the dino droppings", "She had a hunch"],
            correctAnswer: "She investigated the dino droppings",
            image: "assets/images/shit.gif"
        }, 
        {
            question: "Which character dies on the toilet?",
            answers: ["Donald Gennaro", "Robert Muldoon", "Henry Wu", "Elvis"],
            correctAnswer: "Donald Gennaro",
            image: "assets/images/gennaro-death.gif"
        }
    ];
    var game = {
        currentQuestion: 0,
        //timer: 20,
        correctCount: 0,
        wrongCount: 0,
        countdown: function () {
            game.timer--;
            $("#timer").html(game.timer);

            if (game.timer === 0) {
                game.tooSlow();
            }
        },
        displayQuestion() {
            timer = setInterval(game.countdown, 1000);
            $("#question-box").html('<h2>' + trivia[this.currentQuestion].question + '</h2>');
            for (var i = 0; i < trivia[this.currentQuestion].answers.length; i++) {
                $("#answers-box").append('<button class="selection-button" id = "choices-button"' + 'data-name="' + trivia[this.currentQuestion].answers[i] + '">' + trivia[this.currentQuestion].answers[i] + '</button>');
            }
        },
        nextQuestion: function () {
            game.timer = 20;
            $("#timer").html(game.timer);
            game.currentQuestion++;
            $("#answers-box").html("<h2></h2>");
            game.displayQuestion();
        },
        tooSlow: function () {
            clearInterval(timer);
            $("#timer").html(game.timer);
            $("#answers-box").html("<img src='assets/images/must-go-faster.gif'>");

        },
    selected: function (x) {
        clearInterval(timer);
        console.log(trivia[this.currentQuestion].correctAnswer + trivia[this.currentQuestion].image);
        if ($(x.target).data("name") === trivia[this.currentQuestion].correctAnswer) {
            game.correctCount++;
            console.log(game.correctCount);
            game.correctScreen();

        } else {
            game.wrongCount++;
            game.wrongScreen();
        }
        if (game.currentQuestion === trivia.length - 1) {
            setTimeout(game.update, 5 * 1000);
        }
    },
    correctScreen: function () {
        clearInterval(timer);
        $("#answers-box").prepend('<h2> Clever Girl </h2>');
        $("#answers-box").html('<img src=' + trivia[this.currentQuestion].image + '>');
        setTimeout(game.nextQuestion, 5 * 1000);
    },
    wrongScreen: function () {
        clearInterval(timer);
        $("#answers-box").prepend("<h2>Ah ah ah, you didnt' say the magic word!</h2>");
        $("#answers-box").html('<img src=' + trivia[this.currentQuestion].image + '>');
        setTimeout(game.nextQuestion, 5 * 1000);
    },
    update: function() {
        clearInterval(timer);
        $("#question-box").html("<img src='assets/images/crazy.gif'>");
        $("#answers-box").append("<h3> Number correct: " + game.correctCount + "</h3>");
        $("#answers-box").append("<h3> Number wrong: " + game.wrongCount + "</h3>");
    },
    reset: function () {
        this.currentQuestion = 0;
        this.timer = 20;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.displayQuestion();
    }
}
});
