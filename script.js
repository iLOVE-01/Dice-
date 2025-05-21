// Add a shake animation to the dice images when rolling
function rollDice() {
    const die1Img = document.getElementById('die1');
    const die2Img = document.getElementById('die2');

    // Remove any previous animation classes
    die1Img.classList.remove('shake', 'roll');
    die2Img.classList.remove('shake', 'roll');

    // Force reflow to restart animation
    void die1Img.offsetWidth;
    void die2Img.offsetWidth;

    // Add shake animation first
    die1Img.classList.add('shake');
    die2Img.classList.add('shake');

    // After shake, add roll animation
    setTimeout(() => {
        die1Img.classList.remove('shake');
        die2Img.classList.remove('shake');
        die1Img.classList.add('roll');
        die2Img.classList.add('roll');
    }, 500);

    // Generate random numbers between 1 and 6
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // After roll animation ends, update dice images and remove animation class
    setTimeout(() => {
        die1Img.src = `images/dice${die1}.png`;
        die2Img.src = `images/dice${die2}.png`;
        die1Img.classList.remove('roll');
        die2Img.classList.remove('roll');
        document.getElementById('result').innerText = `You rolled a ${die1} and a ${die2}`;
    }, 1000);
}

// Optionally, allow pressing Enter to roll dice
window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') rollDice();
});
