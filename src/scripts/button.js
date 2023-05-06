const boton = document.getElementById("boton")
let input = document.getElementById("input")

boton.onclick=function(){
    let file = document.getElementById("file").value
   let audio32 = new Audio(`${file}`)

    audio32.play()

}
