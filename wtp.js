let pokemon = [
    { name: "bulbasaur",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"   },
    { name: "ivysaur",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"   },
    { name: "venusaur",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"   },
    { name: "charmander",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"   },
    { name: "charmeleon",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"   },
    { name: "charizard",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"   },
    { name: "squirtle",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"   },
    { name: "wartortle",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"   },
    { name: "blastoise",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"   },
    { name: "caterpie",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"  },
    { name: "metapod",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"  },
    { name: "butterfree",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"  },
    { name: "weedle",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"  },
    { name: "kakuna",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"  },
    { name: "beedrill",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"  },
    { name: "pidgey",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"  },
    { name: "pidgeotto",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"  },
    { name: "pidgeot",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"  },
    { name: "rattata",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"  },
    { name: "raticate",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"  },
    { name: "spearow",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"  },
    { name: "fearow",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"  },
    { name: "ekans",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"  },
    { name: "arbok",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"  },
    { name: "pikachu",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"  },
    { name: "raichu",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"  },
    { name: "sandshrew",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"  },
    { name: "sandslash",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"  },
    { name: "nidoran-f",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"  },
    { name: "nidorina",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"  },
    { name: "nidoqueen",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"  },
    { name: "nidoran-m",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"  },
    { name: "nidorino",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"  },
    { name: "nidoking",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"  },
    { name: "clefairy",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"  },
    { name: "clefable",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"  },
    { name: "vulpix",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"  },
    { name: "ninetales",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"  },
    { name: "jigglypuff",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"  },
    { name: "wigglytuff",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"  },
    { name: "zubat",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"  },
    { name: "golbat",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"  },
    { name: "oddish",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"  },
    { name: "gloom",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"  },
    { name: "vileplume",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"  },
    { name: "paras",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"  },
    { name: "parasect",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"  },
    { name: "venonat",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"  },
    { name: "venomoth",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"  },
    { name: "diglett",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"  },
    { name: "dugtrio",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"  },
    { name: "meowth",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"  },
    { name: "persian",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"  },
    { name: "psyduck",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"  },
    { name: "golduck",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"  },
    { name: "mankey",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"  },
    { name: "primeape",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"  },
    { name: "growlithe",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"  },
    { name: "arcanine",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"  },
    { name: "poliwag",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"  },
    { name: "poliwhirl",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"  },
    { name: "poliwrath",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"  },
    { name: "abra",         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"  },
    { name: "kadabra",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"  },
    { name: "alakazam",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"  },
    { name: "machop",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"  },
    { name: "machoke",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"  },
    { name: "machamp",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"  },
    { name: "bellsprout",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"  },
    { name: "weepinbell",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"  },
    { name: "victreebel",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"  },
    { name: "tentacool",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"  },
    { name: "tentacruel",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"  },
    { name: "geodude",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"  },
    { name: "graveler",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"  },
    { name: "golem",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"  },
    { name: "ponyta",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"  },
    { name: "rapidash",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"  },
    { name: "slowpoke",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"  },
    { name: "slowbro",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"  },
    { name: "magnemite",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"  },
    { name: "magneton",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"  },
    { name: "farfetchd",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"  },
    { name: "doduo",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"  },
    { name: "dodrio",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"  },
    { name: "seel",         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"  },
    { name: "dewgong",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"  },
    { name: "grimer",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"  },
    { name: "muk",          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"  },
    { name: "shellder",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"  },
    { name: "cloyster",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"  },
    { name: "gastly",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"  },
    { name: "haunter",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"  },
    { name: "gengar",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"  },
    { name: "onix",         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"  },
    { name: "drowzee",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"  },
    { name: "hypno",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"  },
    { name: "krabby",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"  },
    { name: "kingler",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"  },
    { name: "voltorb",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png" },
    { name: "electrode",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png" },
    { name: "exeggcute",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png" },
    { name: "exeggutor",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png" },
    { name: "cubone",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png" },
    { name: "marowak",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png" },
    { name: "hitmonlee",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png" },
    { name: "hitmonchan",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png" },
    { name: "lickitung",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png" },
    { name: "koffing",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png" },
    { name: "weezing",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png" },
    { name: "rhyhorn",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png" },
    { name: "rhydon",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png" },
    { name: "chansey",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png" },
    { name: "tangela",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png" },
    { name: "kangaskhan",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png" },
    { name: "horsea",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png" },
    { name: "seadra",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png" },
    { name: "goldeen",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png" },
    { name: "seaking",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png" },
    { name: "staryu",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png" },
    { name: "starmie",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png" },
    { name: "mr-mime",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png" },
    { name: "scyther",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png" },
    { name: "jynx",         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png" },
    { name: "electabuzz",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png" },
    { name: "magmar",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png" },
    { name: "pinsir",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png" },
    { name: "tauros",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png" },
    { name: "magikarp",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png" },
    { name: "gyarados",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png" },
    { name: "lapras",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png" },
    { name: "ditto",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" },
    { name: "eevee",        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
    { name: "vaporeon",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png" },
    { name: "jolteon",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png" },
    { name: "flareon",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png" },
    { name: "porygon",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png" },
    { name: "omanyte",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png" },
    { name: "omastar",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png" },
    { name: "kabuto",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png" },
    { name: "kabutops",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png" },
    { name: "aerodactyl",   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png" },
    { name: "snorlax",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" },
    { name: "articuno",     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png" },
    { name: "zapdos",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png" },
    { name: "moltres",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png" },
    { name: "dratini",      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png" },
    { name: "dragonair",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png" },
    { name: "dragonite",    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png" },
    { name: "mewtwo",       img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" },
    { name: "mew",          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" },
];

let queue = [];
let current = null;
let score = 0;
let round = 0;
let lives = 3;
let answered = false;
let timerInterval = null;
let timeLeft = 10;


function buildDatalist() {
    let datalist = document.querySelector("#pokemonList");
    for (let i = 0; i < pokemon.length; i++) {
        let option = document.createElement("option");
        option.value = pokemon[i].name;
        datalist.appendChild(option);
    }
}

buildDatalist();


let startBtn      = document.querySelector("#startBtn");
let guessBtn      = document.querySelector("#guessBtn");
let nextBtn       = document.querySelector("#nextBtn");
let guessInput    = document.querySelector("#guessInput");
let pokemonImg    = document.querySelector("#pokemonImg");
let hintText      = document.querySelector("#hintText");
let resultText    = document.querySelector("#resultText");
let timerArc      = document.querySelector("#timerArc");
let timerNum      = document.querySelector("#timerNum");
let scoreEl       = document.querySelector("#score");
let roundEl       = document.querySelector("#round");
let streakEl      = document.querySelector("#streak");
let startCard     = document.querySelector("#startCard");
let gameContainer = document.querySelector("#gameContainer");
let guide         = document.querySelector("#guide");
let h2            = document.querySelector("#h2");


function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


function updateLives() {
    let hearts = "";
    for (let i = 0; i < 3; i++) {
        if (i < lives) {
            hearts += "❤️";
        } else {
            hearts += "🖤";
        }
    }
    streakEl.innerText = hearts;
}


startBtn.addEventListener("click", function() {
    score = 0;
    round = 0;
    lives = 3;

    queue = shuffle([...pokemon]);

    startCard.style.display = "none";
    guide.style.display = "none";
    gameContainer.style.display = "block";

    updateLives();
    loadPokemon();
});



function loadPokemon() {
    if (queue.length == 0) {
        gameOver();
        return;
    }

    answered = false;
    current = queue.pop();
    round++;

    pokemonImg.src = current.img;
    pokemonImg.classList.add("silhouette");

    hintText.innerText = "";
    resultText.innerText = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
    nextBtn.style.display = "none";

    scoreEl.innerText = score;
    roundEl.innerText = round;

    h2.innerText = "Who's That Pokémon?";

    startTimer();
    guessInput.focus();
}


function startTimer() {
    timeLeft = 10;
    timerNum.innerText = 10;
    timerArc.style.strokeDashoffset = 0;
    timerArc.style.stroke = "#F4C24D";
    timerNum.style.color = "#3a2a2a";

    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        timeLeft--;
        timerNum.innerText = timeLeft;

        let offset = 119 - (119 * (timeLeft / 10));
        timerArc.style.strokeDashoffset = offset;

        if (timeLeft <= 3) {
            timerArc.style.stroke = "#f28c82";
            timerNum.style.color = "#c0392b";
        } else if (timeLeft <= 6) {
            timerArc.style.stroke = "#f5a650";
        }

        if (timeLeft == 5) {
            let name = current.name;
            let hint = name[0].toUpperCase();
            for (let i = 1; i < name.length; i++) {
                hint += " _";
            }
            hintText.innerText = "Hint: " + hint;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timesUp();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}



guessBtn.addEventListener("click", function() {
    checkGuess();
});

guessInput.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        checkGuess();
    }
});

function checkGuess() {
    if (answered) return;

    let guess = guessInput.value.trim().toLowerCase();
    if (guess == "") return;

    answered = true;
    stopTimer();

    if (guess == current.name) {
        score++;
        scoreEl.innerText = score;
        resultText.innerText = "✅ Correct!";
        resultText.style.color = "#1a6b40";
    } else {
        lives--;
        updateLives();
        resultText.innerText = "❌ Wrong! It was " + current.name;
        resultText.style.color = "#8b1c10";
    }

    reveal();

    if (lives <= 0) {
        setTimeout(function() {
            gameOver();
        }, 1500);
        return;
    }
}

function timesUp() {
    if (answered) return;
    answered = true;

    lives--;
    updateLives();
    resultText.innerText = "⏰ Time's up! It was " + current.name;
    resultText.style.color = "#7a4a00";

    reveal();

    if (lives <= 0) {
        setTimeout(function() {
            gameOver();
        }, 1500);
        return;
    }
}

function reveal() {
    pokemonImg.classList.remove("silhouette");
    hintText.innerText = "";
    guessInput.disabled = true;
    guessBtn.disabled = true;

    if (lives > 0) {
        nextBtn.style.display = "block";
    }
}



nextBtn.addEventListener("click", function() {
    loadPokemon();
});



function gameOver() {
    stopTimer();
    gameContainer.style.display = "none";

    let msg = "";
    if (score >= 100) msg = "🌟 Pokémon Master!";
    else if (score >= 70)  msg = "🔥 Amazing Trainer!";
    else if (score >= 40)  msg = "👍 Not bad! Keep practicing!";
    else if (score >= 20)  msg = "📚 Time to study the Pokédex!";
    else                   msg = "😅 Team Rocket is laughing...";

    h2.innerHTML = "Game Over! You got " + score + " / 151 <br>" + msg;

    startCard.style.display = "block";
    guide.style.display = "block";
    startBtn.innerText = "Play Again";
}
