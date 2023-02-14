"use strict";
const images = [{
    src: "adam-kool-ndN00KmbJ1c-unsplash.jpg",
    text: "area 1",
}, {
    src: "ales-krivec-4miBe6zg5r0-unsplash.jpg",
    text: "area 2",
}, {
    src: "ales-krivec-Uszp5Gkg0AI-unsplash.jpg",
    text: "area 3",
}, {
    src: "artem-sapegin-XGDBdSQ70O0-unsplash.jpg",
    text: "area 4",
}, {
    src: "claudio-testa--SO3JtE3gZo-unsplash.jpg",
    text: "area 5",
}, {
    src: "cristina-gottardi-CSpjU6hYo_0-unsplash.jpg",
    text: "area 6",
}, {
    src: "daniela-cuevas-t7YycgAoVSw-unsplash.jpg",
    text: "area 7",
}
]
class Swiper {
    constructor(swipeArea, button, header, images) {
        const textCentre = document.querySelector(".text-centre")
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
const swipeArea = document.querySelector(".swiper-container")
const button = document.querySelectorAll(".btn-group button")
const header = document.querySelector("header")
const swiper = new Swiper(swipeArea, button, header, images);