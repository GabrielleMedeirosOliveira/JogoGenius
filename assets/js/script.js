const main = document.querySelector('.genius');
const buttonColors = ['green', 'yellow', 'red', 'blue'];

function createGenius(array) {
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.classList.add('genius__button');
        div.classList.add(`genius--${array[i]}`);
        div.id = array[i];

        main.appendChild(div);
    }
    const div = document.createElement('div');
    const instructions = document.createElement('P');
    const buttonPlay = document.createElement('button');

    div.classList.add('genius__screen');
    instructions.classList.add('genius--instructions');
    buttonPlay.id = 'playGame';

    instructions.innerText = "Seja bem vindo ao GENIUS!";
    buttonPlay.innerText = "Iniciar Desafio";

    div.append(instructions, buttonPlay);
    main.appendChild(div);

    buttonPlay.addEventListener('click', playGame);
}
createGenius(buttonColors);

function playGame() {
    const screen = document.querySelector('.genius__screen');
    screen.innerHTML = '';

    goodLuck();

    setTimeout(() => {
        startGame();
        menssageWait();
    }, timerFlash * 2);

    setTimeout(() => {
        menssageContinue();
        buttonOn();
    }, timer * 3);
}

function restartGame() {
    const screen = document.querySelector('.genius__screen');
    screen.innerHTML = '';

    colorSequence.splice(0);
    colorSequencePlayer.splice(0);
    if (maxPoints < points) {
        maxPoints = points;
    }

    const instructions = document.createElement('P');
    const buttonPlay = document.createElement('button');

    instructions.classList.add('genius--instructions');
    buttonPlay.id = 'playGame';

    instructions.innerText = "Seja bem vindo ao GENIUS!";
    buttonPlay.innerText = "Iniciar Desafio";

    screen.append(instructions, buttonPlay);

    buttonPlay.addEventListener('click', playGame);
}

function clickButton(event) {
    const item = event.target;

    if (item.id === 'blue') {
        flashBlue();
        colorSequencePlayer.push('BLUE');
        validateSequence(colorSequencePlayer);

    } else if (item.id === 'green') {
        flashGreen();
        colorSequencePlayer.push('GREEN');
        validateSequence(colorSequencePlayer);

    } else if (item.id === 'red') {
        flashRed();
        colorSequencePlayer.push('RED');
        validateSequence(colorSequencePlayer);

    } else {
        flashYellow();
        colorSequencePlayer.push('YELLOW');
        validateSequence(colorSequencePlayer);
    }
}

function buttonOn() {
    const button1 = document.getElementById('green');
    const button2 = document.getElementById('yellow');
    const button3 = document.getElementById('red');
    const button4 = document.getElementById('blue');

    button1.addEventListener('click', clickButton);
    button2.addEventListener('click', clickButton);
    button3.addEventListener('click', clickButton);
    button4.addEventListener('click', clickButton);
}

function buttonOff() {
    const button1 = document.getElementById('green');
    const button2 = document.getElementById('yellow');
    const button3 = document.getElementById('red');
    const button4 = document.getElementById('blue');

    button1.removeEventListener('click', clickButton);
    button2.removeEventListener('click', clickButton);
    button3.removeEventListener('click', clickButton);
    button4.removeEventListener('click', clickButton);
}