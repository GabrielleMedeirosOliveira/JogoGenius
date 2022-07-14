const colors = ['GREEN', 'YELLOW', 'RED', 'BLUE']
const colorSequence = [];
const colorSequencePlayer = [];
let maxPoints = 0;
let points = 0;
let timer = 700;

function shuffleColors() {
    let ramdomNumber = Math.floor(Math.random() * 4);
    let colorSelect = colors[ramdomNumber];
    colorSequence.push(colorSelect);
}

function activeColor(array) {
    let i = 0;

    let colorInterval = setInterval(() => {
        if (i == array.length) {
            clearInterval(colorInterval);
        }
        if (i < array.length) {
            if (array[i] === 'GREEN') {
                flashGreen();
            } else if (array[i] === 'YELLOW') {
                flashYellow();
            } else if (array[i] === 'RED') {
                flashRed();
            } else {
                flashBlue();
            }
        }
        i++;
    }, timer);
}

function startGame() {
    points = 0;
    shuffleColors();
    setTimeout(() => {
        activeColor(colorSequence);
    }, timerFlash);
}

function validateSequence(array) {
    if (array.length == colorSequence.length) {
        let gameColors = colorSequence.toString();
        let playerColors = colorSequencePlayer.toString();

        colorSequencePlayer.splice(0);

        if (gameColors === playerColors) {
            setTimeout(() => {
                buttonOff();
                colorTimer();

            }, timerFlash);
            points++;
        } else {
            youLose();
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== colorSequence[i]) {
            youLose();
        }
    }
}

function colorTimer() {
    let messageTimer = (colorSequence.length + 2) * timer;

    shuffleColors(colors);
    setTimeout(() => {
        menssageWait();
    }, timerFlash);

    activeColor(colorSequence);

    setTimeout(() => {
        menssageContinue();
        buttonOn();
    }, messageTimer);
}