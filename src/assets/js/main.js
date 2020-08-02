'use strict';

const gui = new dat.GUI();
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wave = {
    y: 700,
    length: -0.003,
    amplitude: 100,
    frequency: 0.01
}

const waveFolder = gui.addFolder('wave');
waveFolder.add(wave, 'y', 0, canvas.height);
waveFolder.add(wave, 'length', -0.01, 0.01);
waveFolder.add(wave, 'amplitude', 0, -300, 300);
waveFolder.add(wave, 'frequency', -0.01, 1);
waveFolder.open();

let increment = wave.frequency;

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.lineTo(0, canvas.height);
    for (let i = 0; i < canvas.width; i++) {
        c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
    }
    c.lineTo(canvas.width, canvas.height);
    c.fill();

    increment += wave.frequency;
}

animate();

