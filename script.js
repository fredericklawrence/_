document.addEventListener('DOMContentLoaded', function() {
    // Play background sound
    var audio = document.getElementById('background-sound');
    var played = false;

    function playAudio() {
        if (!played) {
            audio.play();
            played = true;
        }
    }

    // Start audio on user interaction
    document.body.addEventListener('click', playAudio);
    document.body.addEventListener('keydown', playAudio);

    // Random glitch effect on text
    const glitchText = document.querySelectorAll('.glitch');
    setInterval(() => {
        glitchText.forEach(element => {
            element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        });
    }, 200);

    // Redirect on button click
    const button = document.querySelector('.button');
    button.addEventListener('click', function(e) {
        e.preventDefault();
        window.history.back();
    });
});
