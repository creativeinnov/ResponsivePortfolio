const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const closeBtn = document.querySelector('.close-btn');

    // Open the navbar when the hamburger icon is clicked
    menuToggle.addEventListener('click', () => {
        navbar.classList.add('active');
    });

    // Close the navbar when the close button is clicked
    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
    });

    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "YouTuber", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });