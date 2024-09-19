let cube = document.getElementById('cube');
let isDragging = false;
let startX, startY;
let currentX = -30;
let currentY = -30;

document.querySelector('.scene').addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        let deltaX = e.clientX - startX;
        let deltaY = e.clientY - startY;
        currentX = deltaX;
        currentY = deltaY;
        cube.style.transform = `rotateX(${-currentY}deg) rotateY(${currentX}deg)`;
		
    }
	
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});