// Refactoring

const resumeButton = document.getElementById('resume');
const buttons = document.querySelectorAll('button');
const myPortfolio = document.getElementById('myportfolio');

resumeButton.addEventListener('click', () => {
    myPortfolio.textContent = 'Downloading Resume...';
    myPortfolio.style.color = 'gold';
})


