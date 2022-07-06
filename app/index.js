import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hamburguer = document.querySelector('.menu_hamburguer')
const nav = document.querySelector('.nav')
const galleryItems = document.querySelectorAll('.gallery_item')
const Popup = document.querySelector('.gallery_popup')
const galleryPopup = document.querySelectorAll('.popup_img')
const popupClose = document.querySelector('.popup_close')
const body = document.querySelector('body')
const faqTab = document.querySelectorAll('.faq_tabs_tab')

// Mobile Menu function and animation

let tl = gsap.timeline();
let menuTl = gsap.timeline({paused: true});

menuTl.to(nav, { 'clip-path' : 'circle(71.1% at 50% 50%)', ease: 'power2.easeInOut'})
menuTl.to('.menu_text', { y: 0, opacity: 1, stagger: .08, ease: 'power2.easeOut'}, '-=')
menuTl.to('.menu_button', { y: 0, opacity: 1, ease: 'power2.easeOut'}, '-=.5')

menuTl.reverse()

if (window.innerWidth = 1250) {
    hamburguer.addEventListener('click', (e) => {
        hamburguer.classList.toggle('close')
        menuTl.reversed(!menuTl.reversed())
    })
}

let start = '';

if(body.clientWidth >= 1250) {
    start = "top 80%"
} else {
    start = "top 90%"
}


console.log(body.clientWidth)

tl.to('header', {opacity: 1, duration: .8, ease: 'power3'})
tl.from('.reveal_up', {opacity: 0, y: 100, stagger: .3})

tl.from('.nav', {opacity: 0}, '-=1')
tl.from('.hero_bottom', {opacity: 0}, '-=1')

// Countdown

gsap.from(".date", {
    opacity: 0,
    duration: 1,
    ease: 'power2',
    scrollTrigger: {
        trigger: ".countdown",
        start: start,
    }
});

gsap.from(".time-left", {
    opacity: 0,
    duration: 1,
    ease: 'power2',
    scrollTrigger: {
        trigger: ".countdown",
        start: start,
    }
});


// Info

gsap.from(".w-reveal", {
    opacity: 0,
    duration: 1,
    ease: 'power2',
    stagger: .2,
    scrollTrigger: {
        trigger: ".wedding_times",
        start: start,
    }
});

// Story

gsap.from(".s-reveal", {
    opacity: 0,
    duration: .5 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".story_content",
        start: start,
    }
});

gsap.from(".story_img", {
    opacity: 0,
    duration: .8,
    ease: 'power1',
    scrollTrigger: {
        trigger: ".story_content",
        start: start,
    }
});

// location

gsap.from(".l-reveal", {
    opacity: 0,
    duration: .5 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".location h2",
        start: start,
    }
});

// Gallery

gsap.from(".g-reveal", {
    opacity: 0,
    duration: .3 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".gallery h2",
        start: start,
    }
});

// Events

gsap.from(".e-reveal", {
    opacity: 0,
    duration: .5 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".events h2",
        start: start,
    }
});


// Hotels

gsap.from(".h-reveal", {
    opacity: 0,
    duration: .5 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".hotels h2",
        start: start,
    }
});

// Hotels

gsap.from(".ent-reveal", {
    opacity: 0,
    duration: .5 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".entertainments h2",
        start: start,
    }
});

// Team

gsap.from(".t-reveal", {
    opacity: 0,
    duration: .3 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".team h2",
        start: start,
    }
});

// Registry

gsap.from(".r-reveal", {
    opacity: 0,
    duration: .3 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".registry h2",
        start: start,
    }
});

gsap.from(".registry_img", {
    opacity: 0,
    duration: .8,
    ease: 'power1',
    scrollTrigger: {
        trigger: ".registry_content",
        start: start,
    }
});

// Dress code

gsap.from(".d-reveal", {
    opacity: 0,
    duration: .3 ,
    ease: 'power2.out',
    stagger: .3,
    scrollTrigger: {
        trigger: ".dress_code h2",
        start: start,
    }
});

// Confirmation

gsap.from(".c-reveal", {
    opacity: 0,
    duration: .3 ,
    ease: 'power2.out',
    stagger: .25,
    scrollTrigger: {
        trigger: ".confirmation h2",
        start: start,
    }
});

// FAQ

gsap.from(".f-reveal", {
    opacity: 0,
    duration: .3 ,
    ease: 'power2.out',
    stagger: .25,
    scrollTrigger: {
        trigger: ".faq h2",
        start: start,
    }
});

gsap.from(".f-revealUp", {
    opacity: 0,
    y: 100,
    duration: .3 ,
    ease: 'power2',
    stagger: .3,
    scrollTrigger: {
        trigger: ".faq h2",
        start: start,
    }
});


gsap.from(".m-reveal", {
    opacity: 0,
    duration: .3 ,
    ease: 'power2.out',
    stagger: .25,
    scrollTrigger: {
        trigger: ".message h2",
        start: start,
    }
});





// Countdown Timer

let timeLeft = document.querySelector('#time-left')
const date = new Date('09/16/2022');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24
let timerId

const daysContainer = document.querySelector('.days')
const hoursContainer = document.querySelector('.hours')
const minutesContainer = document.querySelector('.minutes')
const secondsContainer = document.querySelector('.seconds')

const countDown = () => {
    const today = new Date();
    const timeSpan = date - today;
    
    if(timeSpan <= - day) {
        timeLeft.innerHTML = 'Gracias por asisitir a nuestro gran dia'
        clearInterval(timerId)
        return
    } else if (timeSpan <= 0) {
        timeLeft.innerHTML = "It's finally the day!"
        clearInterval(timerId)
        return
    } 

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)
    
    daysContainer.innerHTML = days + ' dias'
    hoursContainer.innerHTML = hours + ' horas'
    minutesContainer.innerHTML = minutes + ' minutos'
    secondsContainer.innerHTML = seconds + ' segundos'
    
}

timerId = setInterval(countDown, second)


//Gallery popup

let galleryTl = gsap.timeline();

let arr = Array.from(galleryPopup);
let ind = null;

popupClose.addEventListener('click', () => {
    Popup.classList.toggle('gallery_popup--active')
    arr[ind].classList.toggle('popup_img--active')
    hamburguer.style.display = 'block'
})

Array.from(galleryItems).map((item, index) => {
    item.addEventListener('click', () => {
        Popup.classList.toggle('gallery_popup--active')
        arr[index].classList.toggle('popup_img--active')
        ind = index;
        hamburguer.style.display = 'none'
        })
    })


faqTab.forEach(faq => {
    console.log(faq)
    faq.addEventListener('click', () => {
        faq.querySelector('.fa-chevron-down').classList.toggle('arrow');
        faq.querySelector('.faq_text').classList.toggle('text_reveal');
    })
})

