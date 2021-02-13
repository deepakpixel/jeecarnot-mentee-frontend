

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
const materialPopup = document.querySelector(".sm-material-checkboxes");


const reqBtn = document.querySelector(".req-btn");

reqBtn.addEventListener("click",()=>{
    subPopup.style.display = "block";
    summary.style.display = "none";
    chapterPopup.style.display = "none";
    materialPopup.style.display = "none";

    document.body.style.pointerEvents = "none"
    document.body.style.userSelect = "none"

    subPopup.style.pointerEvents = "all"
    summary.style.pointerEvents = "all"
    chapterPopup.style.pointerEvents = "all"
    materialPopup.style.pointerEvents = "all"
})
function handleQuit(elem){
    
    subPopup.style.display = "none";
    summary.style.display = "none";
    chapterPopup.style.display = "none";
    materialPopup.style.display = "none";
   //elem.parentElement.style.display = "none"
   document.body.style.pointerEvents = "all"
   document.body.style.userSelect = ""
}
let material = [];
function selectSubject(elem){
    
    if(elem.classList.contains("sub-p-phy")){
        let postString = "p-";
        chapterPopup.style.display = "block";
        document.querySelectorAll(".chapter-content")[0].style.display = "block"
        document.querySelectorAll(".chapter-content")[1].style.display = "none"
        document.querySelectorAll(".chapter-content")[2].style.display = "none"
        //document.querySelector(".chapter-inner-head").textContent = `Physics >`
        subPopup.style.display = "none";
        summary.style.display = "none";
        // chapterPopup.style.display = "block";
        material.push(postString)
    }
    if(elem.classList.contains("sub-p-che")){
        let postString = "c-";
        chapterPopup.style.display = "block";
        document.querySelectorAll(".chapter-content")[1].style.display = "block"
        document.querySelectorAll(".chapter-content")[0].style.display = "none"
        document.querySelectorAll(".chapter-content")[2].style.display = "none"
        //document.querySelector(".chapter-inner-head").textContent = `Chemistry > `
        subPopup.style.display = "none";
        summary.style.display = "none";
        // chapterPopup.style.display = "block";
        material.push(postString)
    }
    if(elem.classList.contains("sub-p-mas")){
        let postString = "m-";
        chapterPopup.style.display = "block";
        document.querySelectorAll(".chapter-content")[0].style.display = "none"
        document.querySelectorAll(".chapter-content")[1].style.display = "none"
        document.querySelectorAll(".chapter-content")[2].style.display = "block"
        //document.querySelector(".chapter-inner-head").textContent = `Maths> `
        subPopup.style.display = "none";
        summary.style.display = "none";
        // chapterPopup.style.display = "block";
        material.push(postString)
    }
    
}
// const chapterDD = document.querySelectorAll(".dropDown-chapter");
const mainAllDD = document.querySelectorAll(".chapter-main-topic");

const sub_topic = document.querySelectorAll(".chapter-sub-topic");

// chapterDD.forEach(e=>{
//     e.addEventListener("click",()=>{

//         e.classList.toggle("ch-rotate")
//         e.parentElement.nextElementSibling.classList.toggle("chapter-dropDown")
//     })
// })
mainAllDD.forEach(e=>{
    e.addEventListener("click",()=>{
        
        e.children[1].classList.toggle("ch-rotate")
        e.children[1].parentElement.nextElementSibling.classList.toggle("chapter-dropDown")
        
    })
})

const backArrowChap = document.querySelector(".chapter-head .fa-arrow-left")
const backArrowMat = document.querySelector(".mt-head .fa-arrow-left")
// const backArrowSumm = document.querySelector(".summary-head .fa-arrow-left")

backArrowChap.addEventListener("click",()=>{
    subPopup.style.display = "block";
    summary.style.display = "none";
    chapterPopup.style.display = "none";
})
backArrowMat.addEventListener("click",()=>{
    chapterPopup.style.display = "block";
    subPopup.style.display = "none";
    summary.style.display = "none";
    materialPopup.style.display = "none";
})
// backArrowSumm.addEventListener("click",()=>{
//     chapterPopup.style.display = "none";
//     subPopup.style.display = "none";
//     summary.style.display = "none";
//     materialPopup.style.display = "block";
// })
function addMore(){
    chapterPopup.style.display = "none";
    subPopup.style.display = "block";
    summary.style.display = "none";
    materialPopup.style.display = "none";
}

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

 function pastRequest(){
     swal(
         "",
         "Feature : Coming soon!",
         'warning'
     )
 }

 const subjectNameAll = document.querySelectorAll(".subject-name p")
 const subjectTopicsAll = document.querySelectorAll(".sub-topics")
 
 subjectTopicsAll[1].classList.add("global-hide-class")
 subjectTopicsAll[2].classList.add("global-hide-class")

 subjectNameAll.forEach((e,id)=>{
    
   
     subjectNameAll[0].style.backgroundColor = "#09206F"
     subjectNameAll[0].style.color = "#fff"
     subjectNameAll[0].style.borderBottom = "3px solid #09206F"
     
     e.addEventListener("click",evt=>{
         for(let item of subjectNameAll){
           
            item.style.color = "#09206F"
            item.style.backgroundColor = "#fff"
            item.style.borderBottom = "none"
         }
         for(let item of subjectTopicsAll){
            item.classList.add("global-hide-class")
         }
        
         e.style.borderBottom = "3px solid #09206F"
        e.style.backgroundColor = "#09206F"
        e.style.color = "#fff"
         subjectTopicsAll[id].classList.remove("global-hide-class")
     })
     
 })

 const ch_dropdown_options = document.querySelectorAll(".chapter-sub-topic p")
 const opt_placeholder = document.querySelectorAll(".option-placeholder")
 //console.log(opt_placeholder)
 ch_dropdown_options.forEach(e=>{
     e.addEventListener("click",evt=>{

        ch_dropdown_options.forEach((item)=>{
            item.style.backgroundColor = ""
        })

        e.style.backgroundColor = "lightblue"
       
        mainAllDD.forEach(e=>{
           
            e.children[1].classList.toggle("ch-rotate")
            e.children[1].parentElement.nextElementSibling.classList.toggle("chapter-dropDown")   
            
        })

        let id;
        if(e.parentElement.classList.contains("ch-p") ){
             id = 0;
        }
        if(e.parentElement.classList.contains("ch-c") ){
             id = 1;
        }
        if(e.parentElement.classList.contains("ch-m") ){
             id = 2;
        }
        if(e.textContent.length > 21){
            //console.log(id)
            opt_placeholder[id].textContent = e.textContent.slice(0,30) + "..."
        }
        else{
            opt_placeholder[id].textContent = e.textContent  
        }
     })
 })

 const ch_nextBtn = document.querySelector(".ch-nextBtn")
 const mt_nextBtn = document.querySelector(".mt-nextBtn")

 ch_nextBtn.addEventListener("click",function(){
  
    materialPopup.style.display = "block"
    subPopup.style.display = "none";
    summary.style.display = "none";
    chapterPopup.style.display = "none";
    
    
 })
 mt_nextBtn.addEventListener("click",function(){
  
    materialPopup.style.display = "none"
    subPopup.style.display = "none";
    summary.style.display = "block";
    chapterPopup.style.display = "none";
    
    
 })
// fetch("/jeecarnot-mentee-frontend/cdn/Assets/menteeJS/chapterData.json")
// .then(res=>res.json())
// .then(data=> {
//     for(i in data){
//         if(i[0] == "p"){
//             if(data[i].class == 12)


//         }
//     }
// })