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

      const scriptURL = 'https://script.google.com/macros/s/AKfycbwVfQy_xDgXgb_rA4l95xIkYZ3S8I2cSHt8KUekGz9CtziPnrZjr2sm0t3B8Ty1cao-/exec'

      const form = document.forms['contact-forms']
      
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! Your Form is Submitted Successfully."))
        .then(() => {window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
      })