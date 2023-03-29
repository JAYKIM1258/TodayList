const images = [
    "bg_index_main(1).jpg",
    "bg_index_main(2).jpg",
    "bg_index_main(3).jpg",
    "bg_index_main(4).jpg",
    "bg_index_main(5).jpg"
]
const choiceImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `images/${choiceImg}`;

document.body.appendChild(bgImg);