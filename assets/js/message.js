function youLose() {
    const screen = document.querySelector('.genius__screen');
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const button = document.createElement('button');

    screen.innerHTML = '';
    buttonOff();

    h1.innerText = 'Que pena você errou!'
    if (points === 1) {
        p1.innerText = `Você conseguiu: ${points} ponto`;
    } else {
        p1.innerText = `Você conseguiu: ${points} pontos`;
    }
    if (maxPoints === 1) {
        p2.innerText = `Maior pontuação: ${maxPoints} ponto`;
    } else {
        p2.innerText = `Maior pontuação: ${maxPoints} pontos`;
    }
    p1.style.margin = '20px auto';
    button.id = 'restart';
    button.innerText = 'Jogar Novamente';

    button.addEventListener('click', restartGame);

    screen.append(h1, p1, p2, button);

    let RGB = setInterval(() => {
        setTimeout(() => {
            flashGreen();
        }, 150);
        setTimeout(() => {
            flashYellow();
        }, 300);
        setTimeout(() => {
            flashBlue();
        }, 450);
        setTimeout(() => {
            flashRed();
        }, 600);

    }, 600);

    button.addEventListener('click', () => {
        clearInterval(RGB);
        let i = 0
        setInterval(() => {
            if (i < 3) {
                flashGreen();
                flashYellow();
                flashBlue();
                flashRed();
                i++;
            }
        }, 500);
    });
}

function menssageWait() {
    const screen = document.querySelector('.genius__screen');
    const p = document.createElement('h2');

    screen.innerHTML = '';

    p.innerText = 'Preste atenção na sequência!';

    screen.appendChild(p);
}

function menssageContinue() {
    const screen = document.querySelector('.genius__screen');
    const p1 = document.createElement('h2');
    const p2 = document.createElement('h2');

    screen.innerHTML = '';

    p1.innerText = 'Sua vez!';
    p2.innerText = 'Repita a Sequência...';

    screen.append(p1, p2);
}

function goodLuck() {
    const screen = document.querySelector('.genius__screen');
    const p = document.createElement('h2');
    screen.innerHTML = '';
    p.innerText = 'Prepare-se e Boa Sorte!';
    screen.appendChild(p);
}