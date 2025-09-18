/*---------------toggle navbar------------------*/
let menuIcon = document.querySelector('#menu-icon'); // fixed variable name
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*---------------scroll section active link------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // corrected offset calculation
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href').includes(id)){
                    link.classList.add('active');
                }
            });
        }
    });

    /*---------------sticky navbar------------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*---------------remove toggle icon and navbar-----------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*---------------scroll reveal-----------------*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .container form', { origin: 'bottom' }); // corrected 'button' to 'bottom'
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*---------------typed js-----------------*/
const typed = new Typed('.multiple-text', {
    strings: ['fullStack developer', 'web designer' ], // fixed 'desinger'
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        subject:document.querySelector("#subject").value,
    };

    emailjs
    .send("service_usni3cr", "template_p6insno", templateParams)
    .then(() => alert("email sent!").catch(() => alert("email not send")));

}
