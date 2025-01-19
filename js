var button = document.getElementById('pre1-boton');

button.addEventListener('click', createConfetti);

function createConfetti() {
     
    document.getElementById("sec1-display-buttons").style.display = "none";
    document.getElementById("pre1").innerHTML = "Shiiiii, Si yo también, me muero *se muere en tus brazos*. Yo también te amo mi niña linda hermosa preciosa de mi corazón y de todo yo.*la besa apasionadamente*.";    
    document.getElementById("con").style.display = "block"

    for (let i = 0; i < 250; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);

        var size = Math.random() * 10 + 5; 
        var xPosition = Math.random() * window.innerWidth; 
        var fallTime = Math.random() * 3 + 2; 

        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = randomColor();
        confetti.style.position = "absolute";
        confetti.style.left = `${xPosition}px`;
        confetti.style.top = `-${Math.random() * 250}px`;
        confetti.style.animation = `fall ${fallTime}s linear`;

      
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

function randomColor() {
    const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#FF33F0', '#33FFF4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("con").addEventListener('click' , () => {
    document.getElementById("sec1").style.display = "none";
    document.getElementById("con").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("texto-disculpas").style.display = "block";
});
document.getElementById("boton-next").addEventListener('click' , () => {
    document.getElementById("texto").style.display = "block";
    document.getElementById("texto-disculpas").style.display = "none"
});
document.getElementById("boton-next1").addEventListener('click' , () => {
    document.getElementById("texto1").style.display = "block";
    document.getElementById("texto").style.display = "none"
});
document.getElementById("boton-next2").addEventListener('click' , () => {
    document.getElementById("texto2").style.display = "block";
    document.getElementById("texto1").style.display = "none"
});
document.getElementById("boton-next3").addEventListener('click' , () => {
    document.getElementById("texto2").style.display = "none";
    document.getElementById("texto3").style.display = "block";
});
