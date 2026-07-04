function generateNumber(){
    
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const box = document.querySelector(".resultado")
    box.textContent = result
    box.style.display = "flex"
    
}