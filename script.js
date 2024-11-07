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

    // Enhanced glitch effect with random intensity
    const glitchText = document.querySelectorAll('.glitch');
    let glitchIntensity = 1;

    function updateGlitch() {
        glitchIntensity = Math.min(3, glitchIntensity + (Math.random() * 0.2 - 0.1));
        glitchText.forEach(element => {
            element.style.transform = `translate(${Math.random() * 4 * glitchIntensity - 2 * glitchIntensity}px, 
                ${Math.random() * 4 * glitchIntensity - 2 * glitchIntensity}px)`;
        });
    }

    setInterval(updateGlitch, 200);

    // Add cursor trail effect
    const cursor = {
        x: 0,
        y: 0,
        trail: []
    };

    document.addEventListener('mousemove', (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
        addTrailPoint();
    });

    function addTrailPoint() {
        const point = document.createElement('div');
        point.className = 'cursor-trail';
        point.style.left = cursor.x + 'px';
        point.style.top = cursor.y + 'px';
        document.body.appendChild(point);
        cursor.trail.push(point);

        if (cursor.trail.length > 20) {
            cursor.trail[0].remove();
            cursor.trail.shift();
        }

        setTimeout(() => {
            point.remove();
            cursor.trail = cursor.trail.filter(p => p !== point);
        }, 1000);
    }

    // Redirect on button click
    const button = document.querySelector('.button');
    button.addEventListener('click', function(e) {
        e.preventDefault();
        window.history.back();
    });
});