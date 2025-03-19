/*======menu icon navbar======*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*======scroll section active link======*/
let sections = document.querySelectorAll('section');  
let navLinks = document.querySelectorAll('header nav a');  

window.onscroll = () => {  
    sections.forEach(sec => {  
        let top = window.scrollY;  
        let offset = sec.offsetTop - 150;  
        let height = sec.offsetHeight;  
        let id = sec.getAttribute('id');  

        if (top > offset && top <offset + height) {  
            navLinks.forEach(links => {  
                links.classList.remove('active');  
            });  
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  
        };  
    });  
  

let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('zoom');
    });
});


function toggleText(id, btn) {
    let text = document.getElementById(id);
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        btn.innerText = "Moins";
    } else {
        text.style.display = "none";
        btn.innerText = "Plus";
    }
}


/*===========dark ligth mode===========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*===========scroll reveal===========*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, ', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p .apropos.content', { origin: 'right' });

