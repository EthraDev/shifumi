document.getElementById('start').addEventListener('click', function() {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'fr-FR';
    recognition.start();

    recognition.onresult = function(event) {
        var playerChoice = event.results[0][0].transcript;
        playGame(playerChoice);
    };
});

function playGame(playerChoice) {
    var choices = ['pierre', 'feuille', 'ciseaux'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result;
    var imagePlayer;
    var imageComputer;

    if (playerChoice === 'pierre') {
        if (computerChoice === 'feuille') {
            result = 'Vous avez perdu! Vous avez choisi: pierre. L\'ordinateur a choisi: ' + computerChoice + '. ';
        } else if (computerChoice === 'ciseaux') {
            result = 'Vous avez gagné! Vous avez choisi: pierre. L\'ordinateur a choisi: ' + computerChoice + '. ';
        } else {
            result = 'C\'est une égalité! Vous avez choisi: pierre. L\'ordinateur a choisi: ' + computerChoice + '. ';
        }
        imagePlayer = 'pierre.png';
    } else if (playerChoice === 'feuille') {
        if (computerChoice === 'ciseaux') {
            result = 'Vous avez perdu! Vous avez choisi: feuille. L\'ordinateur a choisi: ' + computerChoice + '. ';
        } else if (computerChoice === 'pierre') {
            result = 'Vous avez gagné! Vous avez choisi: feuille. L\'ordinateur a choisi: ' + computerChoice + '. ';
        } else {
            result = 'C\'est une égalité! Vous avez choisi: feuille. L\'ordinateur a choisi: ' + computerChoice + '. ';
        }
        imagePlayer = 'feuille.png';
    } else if (playerChoice === 'ciseaux') {
        if (computerChoice === 'pierre') {
            result = 'Vous avez perdu! Vous avez choisi: ciseaux. L\'ordinateur a choisi: ' + computerChoice + '. ';
        } else if (computerChoice === 'feuille') {
            result = 'Vous avez gagné! Vous avez choisi: ciseaux. L\'ordinateur a choisi: ' + computerChoice + '. ';
        } else {
            result = 'C\'est une égalité! Vous avez choisi: ciseaux. L\'ordinateur a choisi: ' + computerChoice + '. ';
        }
        imagePlayer = 'ciseaux.png';
    } else {
        result = 'Choix invalide!';
        imagePlayer = '';
    }

    if (imagePlayer !== '') {
        result += '<img src="' + imagePlayer + '" alt="' + playerChoice + '">';
    }

    if (computerChoice === 'pierre') {
        imageComputer = 'pierre.png';
    } else if (computerChoice === 'feuille') {
        imageComputer = 'feuille.png';
    } else if (computerChoice === 'ciseaux') {
        imageComputer = 'ciseaux.png';
    } else {
        imageComputer = '';
    }

    if (imageComputer !== '') {
        result += '<img src="' + imageComputer + '" alt="' + computerChoice + '">';
    }

    document.getElementById('result').innerHTML = result;
}
