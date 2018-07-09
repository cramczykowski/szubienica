// oto silnik gry
const game = {
    currentSentence: null, //aktualnie pobrane hasło
    currentSentenceLetters: null,
    attempts: 5, //ile prób zostało dla aktualnej gry
    elemBoardElem: document.querySelector('.game-board'), //element z całą grą
    elemSentence: document.querySelector('.game-sentence'), //element z hasłem do zgadnięcia
    elemAttempts: document.querySelector('.game-attempts'), //element z liczba prob
    elemLetters: document.querySelector('.game-letters'), //lista z literkami do klikania
    sentences: [ //hasła z których losujemy
        "Fantomas",
        "Super Szamson",
        "Hasło",
        "Myszka",
        "Super bohaterowie",
        "Super pies",
        "Przyjaciel",
        "Kurs Javascript",
        "Terminator",
        "Superman",
        "Herkules",
        "Batman",
        "Spiderman",
        "Kapitan Ameryka"
        "Patuel",
        "Basketball",
        "Neoteric",
        "Programowanie"

    ],
}

{
    ...

        generateLetterButtons : function() {
    const alphabet = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w','x','y','z','ź','ż'];

    alphabet.forEach(function(letter) {
        const button = document.createElement('button');
        button.classList.add('game-letter');
        button.type = 'button';
        button.dataset.letter = letter;
        button.innerHTML = letter;
        this.elemLetters.appendChild(button);
    }.bind(this));
},

initBoard : function() {
    this.generateLetterButtons();
}
};



{
    ...

        bindEvents : function() {
    this.elemLetters.addEventListener('click', function(e) {
        if (e.target.nodeName.toUpperCase() === "BUTTON" && e.target.classList.contains('game-letter')) {
            const letter = e.target.dataset.letter;
            console.log(letter); //narazie wypiszmy literę w konsoli
            e.target.disabled = true;
        }
    }.bind(this));
},

initBoard : function() {
    this.generateLetterButtons();
    this.bindEvents();
}
};

game.initBoard();