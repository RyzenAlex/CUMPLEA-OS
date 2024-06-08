// script.js

document.addEventListener('DOMContentLoaded', function() {
    createConfetti();
    wrapLetters();
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ff0a0a', '#ff8c00', '#ffcd00', '#90ee90', '#add8e6', '#d627ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function wrapLetters() {
    const title = document.getElementById('title');
    const text = title.innerText;
    title.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
}
