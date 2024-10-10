
const listImage = document.querySelector('.list-images')
console.log(listImage)
const imgs = document.getElementsByClassName('imge1')
const lenght = imgs.length
let  current=0;
setInterval(()=>{
    // if(current == lenght -1){
    //     current = 0
    //     let width= imgs[0].offsetWidth
    //     listImage.style.transform = `translateX(${width * -1 *current})`
    // }
    // else{
    if(current == lenght - 1) {
        current = 0; 
    }
        current++
        let width = imgs[0].offsetWidth
        console.log(width)
        listImage.style.transform = `translateX(${width * -1 *current}px)`
    // }
},4000)
