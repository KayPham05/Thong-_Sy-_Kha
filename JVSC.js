
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
