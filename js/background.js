const body = document.querySelector("body")

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const random = Math.ceil(Math.random() * images.length);

body.classList.add('bg0' + random)
