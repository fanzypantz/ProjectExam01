
let galleryText = document.querySelectorAll('.container-gallery-text');
let images = document.querySelectorAll('.image');
const order = [
    [4, 2, 5, 3, 1],
    [1, 4, 2, 5, 3],
    [3, 1, 4, 2, 5],
    [5, 3, 1, 4, 2],
    [2, 5, 3, 1, 4],
]; // couldn't get this to work programmatically, shifting mutated the const array

let galleryHover = function (e) {
    let id = parseInt(e.target.querySelector('.text').id.slice(-1));
    for (let i = 0; i < images.length; i++) {
        images[i].src = `/images/gallery0${order[id-1][i]}.jpg`;
    }
};

for (let i = 0; i < galleryText.length; i++) {
    galleryText[i].addEventListener('mouseenter', galleryHover, false);
}
