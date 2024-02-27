document.getElementById("start").addEventListener("click", function () {
    var recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();
    recognition.lang = "fr-FR";
    recognition.start();
  
    recognition.onresult = function (event) {
      var playerChoice = event.results[0][0].transcript.toLowerCase().trim();
      playGame(playerChoice);
    };
});

var playerScore = 0;
var computerScore = 0;

function playGame(playerChoice) {
    var choices = ["pierre", "feuille", "ciseaux"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result;
  
    // Logique du jeu
    if (playerChoice === "pierre") {
        if (computerChoice === "feuille") {
            result = "Vous avez perdu!";
            computerScore++;
        } else if (computerChoice === "ciseaux") {
            result = "Vous avez gagné!";
            playerScore++;
        } else {
            result = "C'est une égalité!";
        }
    } else if (playerChoice === "feuille") {
        if (computerChoice === "ciseaux") {
            result = "Vous avez perdu!";
            computerScore++;
        } else if (computerChoice === "pierre") {
            result = "Vous avez gagné!";
            playerScore++;
        } else {
            result = "C'est une égalité!";
        }
    } else if (playerChoice === "ciseaux") {
        if (computerChoice === "pierre") {
            result = "Vous avez perdu!";
            computerScore++;
        } else if (computerChoice === "feuille") {
            result = "Vous avez gagné!";
            playerScore++;
        } else {
            result = "C'est une égalité!";
        }
    } else {
        result = "Choix invalide!";
    }
  
    // Mise à jour de l'interface avec le résultat et le score
    updateUI(result, playerChoice, computerChoice);
}

function updateUI(result, playerChoice, computerChoice) {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
  
    let playerImageSrc;
    if (["pierre", "feuille", "ciseaux"].includes(playerChoice)) {
        playerImageSrc = `${playerChoice}.png`;
    } else {
        playerImageSrc = "homme.jpg"; // Image pour choix invalide
    }

    let computerImageSrc = `${computerChoice}.png`;

    document.getElementById("result").innerHTML = `
      <p>${result}</p>
      <p>Vous avez choisi: ${playerChoice}. L'ordinateur a choisi: ${computerChoice}.</p>
      <div class="image-container player"><img src="${playerImageSrc}" alt="${playerChoice}"></div>
      <div class="image-container computer"><img src="${computerImageSrc}" alt="${computerChoice}"></div>
    `;
}
