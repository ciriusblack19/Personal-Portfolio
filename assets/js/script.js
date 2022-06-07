const links = document.querySelectorAll("header nav ul li a")

links.forEach(link => {
    link.addEventListener("click", () => {
        headerNav.classList.remove("show")
    })
});

// Carousel of words
var typed = new Typed('.typing', {
    strings: ['Web Developer', 'Crypto Enthusiast', 'Traveler', 'Phone Fixer'],
    typeSpeed: 100,
    BackSpeed: 80,
    loop: true
});