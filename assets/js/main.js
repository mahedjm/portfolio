/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_zify5qn','template_q7h3o8j','#contact-form','OW2PuLocmaDquZrQ6')

    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message envoyé ✅'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()  
    }, ()=>{

        // Show error message
        contactMessage.textContent = 'Message non envoyé (erreur de service) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scrolld')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
  
  // Le reste de votre code d'animation...
  
  // Initialisez ScrollReveal après que le contenu soit chargé
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  });

  sr.reveal('.perfil, .contact__form');
  sr.reveal('.info', {origin: 'left', delay: 800});
  sr.reveal('.skills', {origin: 'left', delay: 1000});
  sr.reveal('.about', {origin: 'right', delay: 1200});
  sr.reveal('.projects, .services__card,.experience__card', {interval: 100});
});