let angleX = -30;
let angleY = 45;

document.getElementById('rotateLeft').addEventListener('click', () => {
    angleY -= 45; // Gira a la izquierda
    document.getElementById('cube').style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

document.getElementById('rotateRight').addEventListener('click', () => {
    angleY += 45; // Gira a la derecha
    document.getElementById('cube').style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

document.getElementById('rotateUp').addEventListener('click', () => {
    angleX -= 45; // Gira hacia arriba
    document.getElementById('cube').style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

document.getElementById('rotateDown').addEventListener('click', () => {
    angleX += 45; // Gira hacia abajo
    document.getElementById('cube').style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});
