import gsap from 'gsap'

const hamburguer = document.querySelector('.menu_hamburguer')
const nav = document.querySelector('.nav')
const galleryItems = document.querySelectorAll('.gallery_item')
const Popup = document.querySelector('.gallery_popup')
const galleryPopup = document.querySelectorAll('.popup_img')
const popupClose = document.querySelector('.popup_close')

// Mobile Menu function and animation

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

let tl = gsap.timeline();



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

if(window.innerWidth >= 1250) {
    popupClose.addEventListener('click', () => {
    Popup.classList.toggle('gallery_popup--active')
    arr[ind].classList.toggle('popup_img--active')
    })

    Array.from(galleryItems).map((item, index) => {
        item.addEventListener('click', () => {
            Popup.classList.toggle('gallery_popup--active')
            arr[index].classList.toggle('popup_img--active')
            ind = index;
        })
    })
}

