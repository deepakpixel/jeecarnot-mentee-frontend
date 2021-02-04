

const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar')

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

const profile = document.querySelector(".male-profile");
profile.addEventListener("click",e=>{
    if(document.querySelector(".notifications").classList.contains("hidden")){
        document.querySelector(".notifications").classList.remove("hidden")
    }
    document.querySelector(".profile-info").classList.toggle("hidden")
})