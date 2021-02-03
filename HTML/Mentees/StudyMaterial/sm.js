

const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar')

bar.addEventListener('click',()=>{
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

window.addEventListener('resize',()=>{
    if(window.innerWidth > 1200){
       sidebar.classList.remove('active')
       document.querySelector(".ham").classList.remove("fa-times")
       document.querySelector(".ham").classList.add("fa-bars")
       bar.classList.remove('bar-transform')
    }
})


const bell = document.querySelector(".bell")
bell.addEventListener("click",()=>{
    if(document.querySelector(".profile-info").classList.contains("hidden")){
        document.querySelector(".profile-info").classList.remove("hidden")
    }
    document.querySelector(".notifications").classList.toggle("hidden")
})

const profile = document.querySelector(".male-profile");
profile.addEventListener("click",()=>{
    if(document.querySelector(".notifications").classList.contains("hidden")){
        document.querySelector(".notifications").classList.remove("hidden")
    }
    document.querySelector(".profile-info").classList.toggle("hidden")
})

const summary = document.querySelector(".sm-summary");
const subPopup = document.querySelector(".sub-popup");
const chapterPopup = document.querySelector(".sm-chapter");
const reqBtn = document.querySelector(".req-btn");

reqBtn.addEventListener("click",()=>{
    subPopup.style.display = "block";
    summary.style.display = "none";
    chapterPopup.style.display = "none";

    document.body.style.pointerEvents = "none"
    subPopup.style.pointerEvents = "all"
    summary.style.pointerEvents = "all"
    chapterPopup.style.pointerEvents = "all"
})
function handleQuit(elem){
   elem.parentElement.style.display = "none"
   document.body.style.pointerEvents = "all"
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
const chapterDD = document.querySelectorAll(".dropDown-chapter");
const sub_topic = document.querySelectorAll(".chapter-sub-topic");

chapterDD.forEach(e=>{
    e.addEventListener("click",()=>{
        console.log(e.classList.contains("ch-rotate"))
        e.classList.toggle("ch-rotate")
        e.parentElement.nextElementSibling.classList.toggle("chapter-dropDown")
    })
})

const backArrow = document.querySelector(".chapter-head .fa-arrow-left")

backArrow.addEventListener("click",()=>{
    subPopup.style.display = "block";
    summary.style.display = "none";
    chapterPopup.style.display = "none";
})

async function getData(){
    const getProfileDetails = await fetch("https://mentee.jeecarnot.com/profile/my-profile");

    let data = await getProfileDetails.json();
    data = {
        "type": "success",
        "user": {
            "id": "6012e7b3bc3161185df662a8",
            "name": "Test",
            "email": "xipax77042@vy89.com",
            "phone": "8259080981",
            "gender": "M",
            "alternatephone": "8989898989",
            "parentname": "pops",
            "parentPhone": "9898989899",
            "class": "12",
            "lastAttemptJeeYear": "2017",
            "lastAttemptJeepercentile": "66.9",
            "targetYear": "2022",
            "modePreparation": "self",
            "otherTargetExams": "VITEEE, UPSC",
            "firstHear": "Facebook",
            "whyWant": "I want mentorship because .....",
            "expectations": "Bla bla bla",
            "language": "English",
            "materialRequirement": "Test Only",
            "plan": "FREE",
            "mentorID": "",
            "emailVerification": false,
            "profileVerification": true,
            "membershipExpiresOn": "1970-01-01T00:00:00.000Z"
        }
    }
    console.log(data)
    if(data.type == "success"){
        const {name,email} = data.user;
       
        document.querySelector(".name_email .name").textContent = name
        document.querySelector(".name_email .email").textContent = email

    }
    else{
        swal(
            "Error",
            data.err,
            'warning'
        )
    }
}

 getData()