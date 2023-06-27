"use strict";
const images = [
  {
    src: `adam-kool-ndN00KmbJ1c-unsplash.jpg`,
    src_sm: `adam-kool-ndN00KmbJ1c-unsplash (Small).jpg`,
    src_md: `adam-kool-ndN00KmbJ1c-unsplash (Medium).jpg`,
    text: "Mountain Valley",
  },
  {
    src: `ales-krivec-4miBe6zg5r0-unsplash.jpg`,
    src_sm: `ales-krivec-4miBe6zg5r0-unsplash (Small).jpg`,
    src_md: `ales-krivec-4miBe6zg5r0-unsplash (Medium).jpg`,
    text: "Sun Hill",
  },
  {
    src: `ales-krivec-Uszp5Gkg0AI-unsplash.jpg`,
    src_sm: `ales-krivec-Uszp5Gkg0AI-unsplash (Small).jpg`,
    src_md: `ales-krivec-Uszp5Gkg0AI-unsplash (Medium).jpg`,
    text: "Ossian Morey",
  },
  {
    src: `artem-sapegin-XGDBdSQ70O0-unsplash.jpg`,
    src_sm: `artem-sapegin-XGDBdSQ70O0-unsplash (Small).jpg`,
    src_md: `artem-sapegin-XGDBdSQ70O0-unsplash (Medium).jpg`,
    text: "Disney island",
  },
  {
    src: `claudio-testa--SO3JtE3gZo-unsplash.jpg`,
    src_sm: `claudio-testa--SO3JtE3gZo-unsplash (Small).jpg`,
    src_md: `claudio-testa--SO3JtE3gZo-unsplash (Medium).jpg`,
    text: "Greenia Plain",
  },
  {
    src: `cristina-gottardi-CSpjU6hYo_0-unsplash.jpg`,
    src_sm: `cristina-gottardi-CSpjU6hYo_0-unsplash (Small).jpg`,
    src_md: `cristina-gottardi-CSpjU6hYo_0-unsplash (Medium).jpg`,
    text: "Calm hill",
  },
  {
    src: `daniela-cuevas-t7YycgAoVSw-unsplash.jpg`,
    src_sm: `daniela-cuevas-t7YycgAoVSw-unsplash (Small).jpg`,
    src_md: `daniela-cuevas-t7YycgAoVSw-unsplash (Medium).jpg`,
    text: "Hot Air",
  },
  {
    src: `jasper-boer-LJD6U920zVo-unsplash.jpg`,
    src_sm: `jasper-boer-LJD6U920zVo-unsplash (Small).jpg`,
    src_md: `jasper-boer-LJD6U920zVo-unsplash (Medium).jpg`,
    text: `Decay Hill`,
  },
  {
    src: `ken-cheung-KonWFWUaAuk-unsplash.jpg`,
    src_sm: `ken-cheung-KonWFWUaAuk-unsplash (Small).jpg`,
    src_md: `ken-cheung-KonWFWUaAuk-unsplash (Medium).jpg`,
    text: "Wonder Lake",
  },
  {
    src: `pascal-debrunner-1WQ5RZuH9xo-unsplash.jpg`,
    src_sm: `pascal-debrunner-1WQ5RZuH9xo-unsplash (Small).jpg`,
    src_md: `pascal-debrunner-1WQ5RZuH9xo-unsplash (Medium).jpg`,
    text: `Delta Beach`,
  },
];
class Swiper {
  constructor(swipeArea, button, header, images, textCentre, frontDesk) {
    frontDesk.style.height =
      window.innerHeight - document.querySelector("nav").offsetHeight;
    let counter = 0;
    // create dynamic swiper using
    for (let iterate = 1; iterate <= images.length; iterate++) {
      const swiperBox = document.createElement("div");
      swiperBox.classList.add("swiper-box");
      const image = document.createElement("img");
      image.src = "./images/" + images[iterate - 1].src;
      image.alt = `${images[iterate - 1].text}`;
      image.title = `${images[iterate - 1].text}`;
      image.srcset = `./images/${images[iterate - 1].src_sm} 500w, ./images/${
        images[iterate - 1].src_md
      } 1080w, ./images/${images[iterate - 1].src} 1200w`;
      image.crossOrigin = "anonymous";
      image.sizes = `(max-width: 500px) 500px, (max-width: 1080px) 1080px, (max-width: 1200px) 1200px`;
      swiperBox.appendChild(image);
      swipeArea.appendChild(swiperBox);
    }
    header.style.backgroundImage = `url(/images/${images[counter].src})`;
    textCentre.textContent = images[counter].text;
    button[0].onclick = () => {
      counter = counter + 1;
      if (counter == 10) {
        counter = 0;
        const box = swipeArea.children[0];
        box.remove();
        header.style.backgroundImage = `url(/images/${images[counter].src})`;
        textCentre.textContent = images[counter].text;
        swipeArea.appendChild(box);
      } else {
        header.style.backgroundImage = `url(/images/${images[counter].src})`;
        const box = swipeArea.children[0];
        box.remove();
        textCentre.textContent = images[counter].text;
        swipeArea.appendChild(box);
      }
    };
    button[1].onclick = () => {
      counter = counter - 1;
      if (counter < 0) {
        counter = 9;
        const box = swipeArea.children[swipeArea.children.length - 1];
        box.remove();
        header.style.backgroundImage = `url(/images/${images[counter].src})`;
        textCentre.textContent = images[counter].text;
        swipeArea.insertAdjacentElement("afterbegin", box);
      } else {
        const box = swipeArea.children[swipeArea.children.length - 1];
        box.remove();
        header.style.backgroundImage = `url(/images/${images[counter].src})`;
        textCentre.textContent = images[counter].text;
        const allBox = document.querySelector(".swiper-container");
        swipeArea.insertAdjacentElement("afterbegin", box);
      }
    };
  }
}
const textCentre = document.querySelector(".text-centre");
const swipeArea = document.querySelector(".swiper-container");
const button = document.querySelectorAll(".btn-group button");
const frontDesk = document.querySelector(".front-desk");

const header = document.querySelector("header");
const swiper = new Swiper(
  swipeArea,
  button,
  header,
  images,
  textCentre,
  frontDesk
);
const navList = document.querySelector("nav ul");
const bar = document.querySelector(".bar");
class Nav {
  constructor(menu, bar) {
    bar.addEventListener("click", (e) => {
      bar.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }
}
const navLink = new Nav(navList, bar);
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("keyup", (e) => {
    e.key === "ArrowRight" ? button[0].click() : "";
    e.key === "ArrowLeft" ? button[1].click() : "";
  });
  window.addEventListener("resize", () => {
    frontDesk.style.height =
      window.innerHeight - document.querySelector("nav").offsetHeight;
  });
});

