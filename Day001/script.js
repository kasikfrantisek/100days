let h2 = document.querySelectorAll('h2');
let independent = document.querySelector('.independet')
let bussines = document.querySelector('.bussines')
let index = 1;

function inde(thing, path){
    if(thing === independent){
        thing.classList = 'independet'
    } else {
        thing.classList = 'bussines'
    }
    
    console.log(index)
    thing.style.backgroundImage = `url("${path + index}.jpg")`;
    index += 1;
    if(index > 5){
        index = 1;
    }
}

let inter;

h2[0].addEventListener('mouseenter', () => {
    inter = setInterval(() => {inde(independent, "./assets/free_")}, 100);
})

h2[1].addEventListener('mouseenter', () => {
    inter = setInterval(() => {inde(bussines, "./assets/buss_")}, 500);
})

h2[0].addEventListener('mouseleave', () => {
    clearInterval(inter);
    independent.classList = 'independet'
})

h2[1].addEventListener('mouseleave', () => {
    clearInterval(inter);
})



function leaveClass(thing){
    thing.addEventListener('mouseleave', () => {
        thing.removeAttribute('style');
    })
}

leaveClass(independent);
leaveClass(bussines);