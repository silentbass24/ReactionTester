let forma = document.getElementById('container-figura');
let starTime = Date.now();
const span = document.getElementById('time');
let intId = null;
function randColor(){
    const numbers = '0123456789ABCDEF'.split('');
    let result = '#';
    for(let i = 0; i<6; i++){
        result += numbers[Math.floor(Math.random()*16)];
        
    }
    return result;
}

function elapsedTime(t1, t2){
    t2 = t2 || Date.now();
    return ((t2-t1)/1000).toFixed(2);
}

forma.addEventListener('click', formaCliccata);
appareForma2();
function appareForma2() {
    if (intId) {
        clearTimeout(intId);
    }
    intId = setTimeout(() => { forma.style.display = 'block'; }, Math.random() * 2000); //riappare la forma tra 0 e 2000 ms
}
function appareForma1(){
    if (intId) {
        clearInterval(intId);
    }
    intId = setInterval(() => {forma.style.display = 'block';}, Math.random()*2000); //riappare la forma tra 0 e 2000 ms
    
    
    
}


function formaCliccata(){
    forma.style.display = 'none';
    span.innerHTML = elapsedTime(starTime);
    starTime = Date.now();
    if (Math.random() > .5) {
        forma.style.borderRadius = "50%";
    } else {
        forma.style.borderRadius = "0%";
    }

    forma.style.top = Math.random() * 300 + 'px';
    forma.style.left = Math.random() * 650 + 'px';
    forma.style.width = forma.style.height = Math.random() * 400 + 'px';
    forma.style.backgroundColor = randColor();
    
    
    appareForma2();
    
}