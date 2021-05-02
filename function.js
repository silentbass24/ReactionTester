//variables declaration
let forma = document.getElementById('container-figura');
let starTime = Date.now();
const span = document.getElementById('time');
let intId = null;
//function that randomize the color of shape
function randColor() {
    const numbers = '0123456789ABCDEF'.split('');
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result += numbers[Math.floor(Math.random() * 16)];

    }
    return result;
}
//function that calculates the delay from the appearing of the shape and the user click on it
function elapsedTime(t1, t2) {
    t2 = t2 || Date.now();
    return ((t2 - t1) / 1000).toFixed(2);
}
//listener that intercept the click on the shape
forma.addEventListener('click', formaCliccata);
//function that show the shape at the beginning 
appareForma();

function appareForma() {
    if (intId) {
        clearTimeout(intId);
    }
    intId = setTimeout(() => { forma.style.display = 'block'; }, Math.random() * 2000); //shape appearance in a range from 0 to 2000 milliseconds
}
//function that randomize the appearance of square or circle
function formaCliccata() {
    forma.style.display = 'none';
    span.innerHTML = elapsedTime(starTime);
    starTime = Date.now();
    if (Math.random() > .5) {
        forma.style.borderRadius = "50%";//half times appear a circle
    } else {
        forma.style.borderRadius = "0%";//half times appear a square
    }
    //part of the div wher the shapes appears in a random position
    forma.style.top = Math.random() * 200 + 'px';// random position from the top
    forma.style.left = Math.random() * 1150 + 'px';// random position from the left
    //set of range of shape dimension
    forma.style.width = forma.style.height = Math.random() * 200 + 'px';
    //set of random color fro the shape
    forma.style.backgroundColor = randColor();
    //function that show the shape after the click
    appareForma();
}