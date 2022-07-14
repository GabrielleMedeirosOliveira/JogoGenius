let timerFlash = 300;

function flashGreen() {
    const green = document.getElementById('green');

    green.style.backgroundColor = 'green';
    green.style.boxShadow = '0 0 10px 10px green';

    setTimeout(() => {
        green.style.backgroundColor = '#006600';
        green.style.boxShadow = 'none';
    }, timerFlash);
}

function flashYellow() {
    const yellow = document.getElementById('yellow');

    yellow.style.backgroundColor = 'yellow';
    yellow.style.boxShadow = '0 0 10px 10px yellow';

    setTimeout(() => {
        yellow.style.backgroundColor = '#b3b300b0';
        yellow.style.boxShadow = 'none';
    }, timerFlash);
}

function flashRed() {
    const red = document.getElementById('red');

    red.style.backgroundColor = 'red';
    red.style.boxShadow = '0 0 10px 10px red';

    setTimeout(() => {
        red.style.backgroundColor = '#c70000c9';
        red.style.boxShadow = 'none';
    }, timerFlash);
}

function flashBlue() {
    const blue = document.getElementById('blue');

    blue.style.backgroundColor = 'blue';
    blue.style.boxShadow = '0 0 10px 10px blue';

    setTimeout(() => {
        blue.style.backgroundColor = '#0000c2';
        blue.style.boxShadow = 'none';
    }, timerFlash);
}