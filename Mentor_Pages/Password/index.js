// let notify_Number = 19
// if(notify_Number > 0){
//     document.styleSheets[0].addRule('#alert::before',`content: "${notify_Number}" `)
// }
// else{
//     document.styleSheets[0].addRule('#alert::before',`display: "none" `)
// }

const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar')
const profile = document.querySelector(".male-profile");

bar.addEventListener('click',(e)=>{
    sidebar.classList.toggle('active')
    bar.classList.toggle('bar-transform')

    if(bar.classList.contains("bar-transform")){
        document.querySelector(".ham").classList.add("fa-times")
        document.querySelector(".ham").classList.remove("fa-bars")
    }
    else{
        document.querySelector(".ham").classList.remove("fa-times")
        document.querySelector(".ham").classList.add("fa-bars")
    }
})

window.addEventListener('resize',(e)=>{
    if(window.innerWidth > 1200){
       sidebar.classList.remove('active')
       document.querySelector(".ham").classList.remove("fa-times")
       document.querySelector(".ham").classList.add("fa-bars")
       bar.classList.remove('bar-transform')
    }
})


const bell = document.querySelector(".bell")

bell.addEventListener("click",e=>{
    if(document.querySelector(".profile-info").classList.contains("hidden")){
        document.querySelector(".profile-info").classList.remove("hidden")
    }
    document.querySelector(".notifications").classList.toggle("hidden")
})
profile.addEventListener("click",e=>{
    if(document.querySelector(".notifications").classList.contains("hidden")){
        document.querySelector(".notifications").classList.remove("hidden")
    }
    document.querySelector(".profile-info").classList.toggle("hidden")
})


// password check
const newPass = document.querySelector("#new_pass")
const oldPass = document.querySelector("#old_pass")
const confirmPass = document.querySelector("#confirm_pass")
const save = document.querySelector(".save-btn")
const errorLine = document.querySelectorAll(".error")

save.addEventListener("click",(e)=>{
    e.preventDefault()
    let error;
    if(/^\s*$/.test(newPass.value) || /^\s*$/.test(confirmPass.value)){
        error = true
        
        return
    }
    else{
        if(newPass.value != confirmPass.value){
            error = true
            console.log("not same")
            return
        }
        // submit form
        document.querySelector("#form_pass").submit()
    }
})