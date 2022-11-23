let btn = document.querySelector('.start button');
let start = document.querySelector('.start');
let number = 2;
let container = document.querySelector('.container');
let index = 0;
let levelNum = 1;
let level = document.querySelector('.level')
let stats = document.querySelector('.stats');
let gameOver = document.querySelector('.game-over');
let timer = document.querySelector('.time-out');
let win = document.querySelector('.win');
let time;


function generateMap(num){
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.innerHTML = '';
    for(let i = 0; i < number*number; i++){
        container.innerHTML += `<div></div>`
    }
    randomRed();
}

function timeOut(){
    if(Number(timer.textContent) === 0){
        gameOver.removeAttribute('style');
        container.classList.add('hidden');
        stats.classList.add('hidden')
    }
    timer.textContent = Number(timer.textContent) - 1;
}

function randomRed(){
    let divs = document.querySelectorAll('.container div')
    let random = Math.floor(Math.random() * divs.length);
    
    if(index === number){
        divs[random].classList.add('gold')
        document.querySelector('.gold').addEventListener('click', () => {
            number += 1;
            index = 0;
            levelNum +=1;
            generateMap(number);
            timer.textContent = Number(timer.textContent) + 5;
            level.textContent = `LEVEL ${levelNum}`
        })
    } else {
        divs[random].classList.add('red')
        let red = document.querySelector('.red')
        red.addEventListener('click',  changeRed);
    }

    if(levelNum === 11){
        container.classList.add('hidden')
        stats.classList.add('hidden')
        win.removeAttribute('style')
        clearInterval(time)
    }
}


btn.addEventListener('click', () => {
    start.style.display = 'none'
    container.classList.remove('hidden')
    stats.classList.remove('hidden')
    generateMap(number);
    time = setInterval(() => {
        timeOut();
    }, 1000)
})

function changeRed(){
    let red = document.querySelector('.red')
    red.classList.remove('red');
    red.removeEventListener('click',  changeRed)
    index++
    randomRed();
}

