
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

const allFeedback = document.querySelectorAll(".ans-of-eff");
const allRound = document.querySelectorAll(".ans-of-eff span");

let data={ 
    feedback : {
        "effort": "",  
        "mentorEffort": "",
        "serviceSatisfaction": "",      
        "mathAssignment":"",      
        "physicsAssignment":"",      
        "chemAssignment": "",      
        "assignedWork":"",      
        "supportMentor":"",      
        "queryMentor":"",      
        "materialMentor": "",      
        "motivateMentor":"",     
        "commentMentor": "",      
        "carnotRecommend":"",
    }
}

allFeedback.forEach((e,id)=>{
    // e.addEventListener("click",evt=>{
        
    // })
    for(let item of e.children){
        item.addEventListener("click",(evt)=>{
            if(item.parentElement.id == "f-0"){
                data.feedback.effort = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-1"){
                data.feedback.mentorEffort = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-2"){
                data.feedback.serviceSatisfaction = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-3"){
                data.feedback.physicsAssignment = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-4"){
                data.feedback.chemAssignment = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-5"){
                data.feedback.mathAssignment = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-6"){
                data.feedback.assignedWork = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-7"){
                data.feedback.supportMentor = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-8"){
                data.feedback.queryMentor = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-9"){
                data.feedback.materialMentor = Number(evt.target.dataset.id) + 1
            }
            if(item.parentElement.id == "f-10"){
                data.feedback.motivateMentor = Number(evt.target.dataset.id) + 1
            }

            

            for(let i=4;i >= Number(evt.target.dataset.id) ; i-- ){
                
                item.parentElement.children[i].style.backgroundColor = ""
            }
            for(let i=0;i <= Number(evt.target.dataset.id) ; i++ ){
                
                item.parentElement.children[i].style.backgroundColor = "rgb(85, 233, 85)"
            }
       })
    }
})

const submitBtn = document.querySelector(".submit-feedback-btn")

const sendFeedback=() =>{
    data.feedback.commentMentor = document.querySelector(".f-comments").value;
    document.getElementsByName("recommend").forEach(e=>{
        if(e.checked){
            data.feedback.carnotRecommend = e.value
        }
    })
    let error = false ;
    for(let key in data.feedback){
        console.log(`${data.feedback[key]}`)
        if((`${data.feedback[key]}`) == ""){
            error = true;
            console.log("cant sub",error)
            return swal(
                "Error",
                "Fill",
                "warning"
            )
        }

    }
    if(!error){
        submitBtn.disabled = true
        submitBtn.style.cursor = "not-allowed"
        submitBtn.textContent = "Submit..."
        console.log(data)
        fetch("https://mentee.jeecarnot.com/dashboard/submit-feedback",{
            method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(data) 
        })
        .then(res=>res.json())
        .then(serverData => {
            if(serverData.type == "success"){
                swal(
                    "Success",
                    serverData.msg,
                    "success"
                )
                submitBtn.disabled = false
                submitBtn.style.cursor = "pointer"
                submitBtn.textContent = "Submit"
            }
            else{
                swal(
                    "Error",
                    serverData.err,
                    "warning"
                )
                submitBtn.disabled = false
                submitBtn.style.cursor = "pointer"
                submitBtn.textContent = "Submit"
            }
        })
    }
}



