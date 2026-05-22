let gryffindor = 0;
let slytherin  = 0;
let hufflepuff = 0;
let ravenclaw  = 0;

let currentQ = 0;

let startBtn    = document.querySelector("#startBtn");
let retryBtn    = document.querySelector("#retryBtn");
let startCard   = document.querySelector("#startCard");
let quizArea    = document.querySelector("#quizArea");
let resultCard  = document.querySelector("#resultCard");
let guide       = document.querySelector("#guide");
let h2          = document.querySelector("#h2");

let questionText  = document.querySelector("#questionText");
let optionsDiv    = document.querySelector("#options");
let progressFill  = document.querySelector("#progressFill");
let progressText  = document.querySelector("#progressText");

let resultCrest = document.querySelector("#resultCrest");
let resultHouse = document.querySelector("#resultHouse");
let resultMsg   = document.querySelector("#resultMsg");
let scoresDiv   = document.querySelector("#scores");



let questions = [
    {
        question: "What do you value most in life?",
        options: [
            { text: " Courage and bravery",     house: "G" },
            { text: " Ambition and power",       house: "S" },
            { text: " Loyalty and hard work",    house: "H" },
            { text: " Knowledge and wisdom",     house: "R" }
        ]
    },
    {
        question: "A troll is loose in the school. What do you do?",
        options: [
            { text: " Rush in to help",                        house: "G" },
            { text: " Find a way to use it to my advantage",   house: "S" },
            { text: " Stay and protect the younger students",   house: "H" },
            { text: " Study it from a safe distance",          house: "R" }
        ]
    },
    {
        question: "Pick your favourite subject at Hogwarts.",
        options: [
            { text: " Defence Against the Dark Arts", house: "G" },
            { text: " Potions",                       house: "S" },
            { text: " Herbology",                     house: "H" },
            { text: " Charms",                        house: "R" }
        ]
    },
    {
        question: "Your ideal weekend looks like...",
        options: [
            { text: " An exciting adventure outside",    house: "G" },
            { text: " Planning my next big move",        house: "S" },
            { text: " Helping a friend with something",  house: "H" },
            { text: " Reading a good book alone",        house: "R" }
        ]
    },
    {
        question: "Someone challenges you to a duel. You...",
        options: [
            { text: " Accept immediately — bring it on!",      house: "G" },
            { text: " Accept only if I know I can win",        house: "S" },
            { text: " Try to talk things out first",           house: "H" },
            { text: " Ask for the rules before agreeing",      house: "R" }
        ]
    },
    {
        question: "You find a bag of gold on the street. You...",
        options: [
            { text: " Use it for an epic adventure",       house: "G" },
            { text: " Keep it and invest it wisely",       house: "S" },
            { text: " Share it with people who need it",   house: "H" },
            { text: " Research the right thing to do",     house: "R" }
        ]
    },
    {
        question: "Pick the magical creature you'd most want as a companion.",
        options: [
            { text: " Griffin — fierce and loyal",      house: "G" },
            { text: " Serpent — cunning and mysterious", house: "S" },
            { text: " Niffler — friendly and curious",   house: "H" },
            { text: " Owl — wise and watchful",          house: "R" }
        ]
    },
    {
        question: "What frightens you the most?",
        options: [
            { text: " Being seen as a coward",         house: "G" },
            { text: " Being ordinary and forgotten",   house: "S" },
            { text: " Losing the people I love",       house: "H" },
            { text: " Remaining ignorant forever",     house: "R" }
        ]
    },
    {
        question: "A fellow student is being bullied. You...",
        options: [
            { text: " Step in immediately and confront the bully",  house: "G" },
            { text: " Report it to gain favour with a teacher",     house: "S" },
            { text: " Comfort the student and get help",            house: "H" },
            { text: " Observe and find the smartest way to help",   house: "R" }
        ]
    },
    {
        question: "If the Sorting Hat were deciding, you secretly hope for...",
        options: [
            { text: " Gryffindor", house: "G" },
            { text: " Slytherin",  house: "S" },
            { text: " Hufflepuff", house: "H" },
            { text: " Ravenclaw",  house: "R" }
        ]
    }
];


startBtn.addEventListener("click", function() {
    gryffindor = 0;
    slytherin  = 0;
    hufflepuff = 0;
    ravenclaw  = 0;
    currentQ   = 0;

    startCard.style.display  = "none";
    guide.style.display      = "none";
    resultCard.style.display = "none";
    quizArea.style.display   = "block";

    showQuestion();
});


function showQuestion() {
    let q = questions[currentQ];

    questionText.innerText = q.question;
    optionsDiv.innerHTML   = "";

    progressFill.style.width = ((currentQ + 1) / 10 * 100) + "%";
    progressText.innerText   = "Question " + (currentQ + 1) + " of 10";

    for (let i = 0; i < q.options.length; i++) {
        let btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.innerText = q.options[i].text;
        btn.setAttribute("data-house", q.options[i].house);
        btn.addEventListener("click", pickAnswer);
        optionsDiv.appendChild(btn);
    }
}


function pickAnswer() {
    let house = this.getAttribute("data-house");

    if (house == "G") gryffindor++;
    if (house == "S") slytherin++;
    if (house == "H") hufflepuff++;
    if (house == "R") ravenclaw++;

    currentQ++;

    if (currentQ < 10) {
        showQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    quizArea.style.display   = "none";
    resultCard.style.display = "block";

    let house = getWinner();

    if (house == "G") {
        resultCrest.innerText        = "🦁";
        resultHouse.innerText        = "Gryffindor!";
        resultHouse.style.color      = "#ae0001";
        resultCard.style.background  = "#f9e8e8";
        resultMsg.innerText          = "You belong in Gryffindor! Brave, daring and chivalrous — you face danger head on and inspire those around you. Dumbledore would be proud.";
    }

    if (house == "S") {
        resultCrest.innerText        = "🐍";
        resultHouse.innerText        = "Slytherin!";
        resultHouse.style.color      = "#2a623d";
        resultCard.style.background  = "#e8f4ec";
        resultMsg.innerText          = "You belong in Slytherin! Cunning, ambitious and resourceful — you always find a way to get what you want. The great Merlin was a Slytherin too.";
    }

    if (house == "H") {
        resultCrest.innerText        = "🦡";
        resultHouse.innerText        = "Hufflepuff!";
        resultHouse.style.color      = "#c8922a";
        resultCard.style.background  = "#fdf4e0";
        resultMsg.innerText          = "You belong in Hufflepuff! Loyal, patient and hardworking — you treat everyone fairly and never give up. Hufflepuff has produced the fewest dark wizards.";
    }

    if (house == "R") {
        resultCrest.innerText        = "🦅";
        resultHouse.innerText        = "Ravenclaw!";
        resultHouse.style.color      = "#222f5b";
        resultCard.style.background  = "#e8ecf8";
        resultMsg.innerText          = "You belong in Ravenclaw! Wise, creative and curious — you have a sharp mind and a thirst for knowledge. Luna Lovegood is a proud Ravenclaw!";
    }

    scoresDiv.innerHTML = `
        <div class="score-pill pill-g">🦁 ${gryffindor}</div>
        <div class="score-pill pill-s">🐍 ${slytherin}</div>
        <div class="score-pill pill-h">🦡 ${hufflepuff}</div>
        <div class="score-pill pill-r">🦅 ${ravenclaw}</div>
    `;

    h2.innerText = "The Hat has decided!";
}


function getWinner() {
    let max = Math.max(gryffindor, slytherin, hufflepuff, ravenclaw);

    if (gryffindor == max) return "G";
    if (slytherin  == max) return "S";
    if (hufflepuff == max) return "H";
    if (ravenclaw  == max) return "R";
}


retryBtn.addEventListener("click", function() {
    resultCard.style.display = "none";
    startCard.style.display  = "block";
    guide.style.display      = "block";
    h2.innerText             = "Where shall you belong?";
    resultCard.style.background = "#F6F1E8";
    }
);
