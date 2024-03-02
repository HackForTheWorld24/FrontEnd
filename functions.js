function randomizeStarLocations() {
    var stars = document.getElementsByClassName('random-stars');
    for (var i = 0; i < stars.length; i++) {
        // Fade out the star
        stars[i].style.opacity = 0;

        // After the star has faded out, move it and fade it back in
        setTimeout(function(star) {
            var randomX = Math.floor(Math.random() * window.innerWidth);
            var randomY = Math.floor(Math.random() * window.innerHeight);
            star.style.left = randomX + 'px';
            star.style.top = randomY + 'px';
            star.style.opacity = 1;
        }, 500, stars[i]); // 500 should be the same as your CSS transition duration
    }
}
setInterval(randomizeStarLocations, 2000); // 2000 should be at least twice your CSS transition duration