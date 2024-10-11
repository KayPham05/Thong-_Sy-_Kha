const listImage = document.querySelector('.list-images'); // The container for the images
const imgs = document.querySelectorAll('.list-images img'); // All images in the slider
const btnLeft = document.querySelector('.btn-left'); // Previous button
const btnRight = document.querySelector('.btn-right'); // Next button

<<<<<<< HEAD
let current = 0; // Current image index
const length = imgs.length; // Total number of images

// Function to reload the slider and update the position
function reloadSlider() {
    let width = imgs[0].offsetWidth; // Width of each image
    listImage.style.transform = `translateX(${-width * current}px)`; // Move the slider
}

// Next button click event
btnRight.onclick = function () {
    if (current + 1 >= length) {
        current = 0;
    } else {
        current++;
    }
    reloadSlider();
}

// Previous button click event
btnLeft.onclick = function () {
    if (current - 1 < 0) {
        current = length - 1;
    } else {
        current--;
    }
    reloadSlider();
}

// Automatic sliding every 4 seconds
let refreshSlide = setInterval(() => {
    btnRight.click(); // Simulate the "next" button being clicked
}, 4000);

// Initial call to set the slider position
reloadSlider();
=======
const listImage = document.querySelector('.list-images')
console.log(listImage)
const imgs = document.getElementsByClassName('imge1')
const btnLeft=document.getElementById('btn-left')
const btnRight=document.getElementById('btn-right')
const lenght = imgs.length
let  current=0;
const hendelChangseSlide = () =>{
    if(current == lenght -1){
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
    }
    else{
        current++
        let width = imgs[0].offsetWidth
        console.log(width)
        listImage.style.transform = `translateX(${width * -1 *current}px)`
    }
}
setInterval(hendelChangseSlide,4000)
btnRight.addEventListener("click",() =>{
    hendelChangseSlide()
})

btnLeft.addEventListener("click",() =>{
    if(current == 0){
        current = lenght - 1
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 *current}px)`
    }
    else{
        current++
        let width = imgs[0].offsetWidth
        console.log(width)
        listImage.style.transform = `translateX(${width * -1 *current}px)`
    }
})
>>>>>>> d3112f7c1138388111ffdebb8d70fcc99c95f497
