"use strict";
const images = [{
    src: "adam-kool-ndN00KmbJ1c-unsplash.jpg",
    text: "Mountain Valley",
}, {
    src: "ales-krivec-4miBe6zg5r0-unsplash.jpg",
    text: "Sun Hill",
}, {
    src: "ales-krivec-Uszp5Gkg0AI-unsplash.jpg",
    text: "Ossian Morey",
}, {
    src: "artem-sapegin-XGDBdSQ70O0-unsplash.jpg",
    text: "Disney island",
}, {
    src: "claudio-testa--SO3JtE3gZo-unsplash.jpg",
    text: "Greenia Plain",
}, {
    src: "cristina-gottardi-CSpjU6hYo_0-unsplash.jpg",
    text: "Calm hill",
}, {
    src: "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    text: "Hot Air",
}
]
class Swiper {
    constructor(swipeArea, button, header, images, textCentre, frontDesk) {

        frontDesk.style.height = window.innerHeight - document.querySelector("nav").offsetHeight
        let counter = 0;
        // create dynamic swiper using
        for (let iterate = 1; iterate <= images.length; iterate++) {
            const swiperBox = document.createElement("div")
            swiperBox.classList.add("swiper-box")
            const image = document.createElement("img")
            image.src = "./images/" + images[iterate - 1].src
            image.alt = `images-${iterate}`
            swiperBox.appendChild(image)
            swipeArea.appendChild(swiperBox)
        }
        header.style.backgroundImage = `url(/images/${images[counter].src})`
        textCentre.textContent = images[counter].text
        button[0].onclick = async () => {
            counter = counter + 1
            if (counter == 7) {
                counter = 0
                const box = swipeArea.children[0]
                box.remove()
                header.style.backgroundImage = `url(/images/${images[counter].src})`
                textCentre.textContent = images[counter].text
                swipeArea.appendChild(box);
            }
            else {
                header.style.backgroundImage = `url(/images/${images[counter].src})`
                const box = swipeArea.children[0]
                box.remove()
                textCentre.textContent = images[counter].text
                swipeArea.appendChild(box);
            }

        }
        button[1].onclick = async () => {
            counter = counter - 1
            if (counter < 0) {
                counter = 6
                const box = swipeArea.children[swipeArea.children.length - 1]
                box.remove()
                header.style.backgroundImage = `url(/images/${images[counter].src})`
                textCentre.textContent = images[counter].text
                swipeArea.insertAdjacentElement("afterbegin", box)
            }
            else {
                const box = swipeArea.children[swipeArea.children.length - 1]
                box.remove()
                header.style.backgroundImage = `url(/images/${images[counter].src})`
                textCentre.textContent = images[counter].text
                const allBox = document.querySelector(".swiper-container")
                swipeArea.insertAdjacentElement("afterbegin", box)
            }

        }
    }
}
const textCentre = document.querySelector(".text-centre")
const swipeArea = document.querySelector(".swiper-container")
const button = document.querySelectorAll(".btn-group button")
const frontDesk = document.querySelector(".front-desk")

const header = document.querySelector("header")
const swiper = new Swiper(swipeArea, button, header, images, textCentre, frontDesk);
const navList=document.querySelector("nav ul")
const bar=document.querySelector(".bar")
class Nav {
    constructor(menu,bar){
        bar.addEventListener("click",(e)=>{
            bar.classList.toggle("active")
            menu.classList.toggle("active")
        })
    }
}
const navLink= new Nav(navList,bar)