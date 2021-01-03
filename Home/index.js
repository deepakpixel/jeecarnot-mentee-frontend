let notify_Number = 1
if(notify_Number > 0){
    document.styleSheets[0].addRule('#alert::before',`content: "${notify_Number}" `)
}
else{
    document.styleSheets[0].addRule('#alert::before',`display: "none" `)
}

const bell = document.querySelector(".bell")
bell.addEventListener("click",e=>{
    if(notify_Number)
    document.querySelector(".notifications").classList.toggle("hidden")
})