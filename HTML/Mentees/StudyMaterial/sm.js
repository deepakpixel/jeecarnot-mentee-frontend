

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
    document.querySelector(".notifications").classList.toggle("hidden")
})

const summary = document.querySelector(".sm-summary");
const subPopup = document.querySelector(".sub-popup");
const chapterPopup = document.querySelector(".sm-chapter");
const reqBtn = document.querySelector(".req-btn");

reqBtn.addEventListener("click",e=>{
    subPopup.style.display = "block";
    summary.style.display = "none";
    chapterPopup.style.display = "none";
})
function handleQuit(elem){
   elem.parentElement.style.display = "none"
}
let material = [];
function selectSubject(elem){
    
    if(elem.classList.contains("sub-p-phy")){
        let postString = "p-";
        chapterPopup.style.display = "block";
        document.querySelector(".chapter-inner-head").textContent = `Physics >`
        subPopup.style.display = "none";
        summary.style.display = "none";
        chapterPopup.style.display = "block";
        material.push(postString)
    }
    if(elem.classList.contains("sub-p-che")){
        let postString = "c-";
        chapterPopup.style.display = "block";
        document.querySelector(".chapter-inner-head").textContent = `Chemistry > `
        subPopup.style.display = "none";
        summary.style.display = "none";
        chapterPopup.style.display = "block";
        material.push(postString)
    }
    if(elem.classList.contains("sub-p-mas")){
        let postString = "m-";
        chapterPopup.style.display = "block";
        document.querySelector(".chapter-inner-head").textContent = `Maths> `
        subPopup.style.display = "none";
        summary.style.display = "none";
        chapterPopup.style.display = "block";
        material.push(postString)
    }
    console.log(material)
}
const chapterDD = document.querySelector(".dropDown-chapter");
const sub_topic = document.querySelector(".chapter-sub-topic");
chapterDD.addEventListener("click",e=>{
    chapterDD.classList.toggle("ch-rotate")
    sub_topic.classList.toggle("chapter-dropDown")
})
