const changebg = document.querySelector("button")
const text = document.querySelector(".changeText")
const body = document.body

function randomColorGenrator(){
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const randomColor = `rgb(${red} , ${green} ,${blue})`
    return randomColor
}

function randomColorGenrator2(){
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const randomColor3 = `rgb(${red} , ${green} ,${blue})`
    return randomColor3
}

changebg.addEventListener('click' , function(){
    const randomColor2 = randomColorGenrator()
    const randomColor3 = randomColorGenrator2()
    console.log(randomColor2)
    body.style.backgroundColor = randomColor2;
    // text.style.color = randomColor3
    text.textContent = randomColor2

})