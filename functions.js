function randomizeStarLocations() {
    var stars = document.getElementsByClassName('random-stars');
    var stars = document.getElementsByClassName('random-stars');
    var intervals = []; // Array to store interval IDs

    for (var i = 0; i < stars.length; i++) {
        // Fade out the star
        stars[i].style.opacity = 0;

        // Clear previous interval for the star
        clearTimeout(intervals[i]);

        // After the star has faded out, move it and fade it back in
        intervals[i] = setTimeout(function(star) {
            var randomX = Math.floor(Math.random() * window.innerWidth);
            var randomY = Math.floor(Math.random() * window.innerHeight);
            star.style.left = randomX + 'px';
            star.style.top = randomY + 'px';
            setTimeout(function() {
                star.style.opacity = 1; 
            }, 1000); // Wait for 1 second before fading back in
        }, (Math.random() * 2000), stars[i]); // Random interval between 0 and 2000 milliseconds
    }
}

function startRandomization() {
    randomizeStarLocations();
    setTimeout(function() {
        randomizeStarLocations();
        setTimeout(startRandomization, Math.random() * 5000);
    }, Math.random() * 2000);
}

startRandomization();
