

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
        const {name,email,phone,alternatephone,parentname,parentPhone,lastAttemptJeeYear,lastAttemptJeepercentile,targetYear,modePreparation,otherTargetExams,language,materialRequirement,firstHear,whyWant,expectations} = data.user;
        document.querySelector(".main-center-name").textContent = name
        document.querySelector(".name_email .name").textContent = name
        document.querySelector(".name_email .email").textContent = email
        let value_datails = document.querySelectorAll(".value_details");
        value_datails[0].textContent = email
        value_datails[1].textContent = phone
        value_datails[2].textContent = alternatephone
        value_datails[3].textContent = parentname
        value_datails[4].textContent = parentPhone
        value_datails[5].textContent = data.user.class
        value_datails[6].textContent = lastAttemptJeeYear
        value_datails[7].textContent = lastAttemptJeepercentile
        value_datails[8].textContent = targetYear
        value_datails[9].textContent = modePreparation
        value_datails[10].textContent = "coaching not found"
        value_datails[11].textContent = otherTargetExams
        value_datails[12].textContent = language
        value_datails[13].textContent = materialRequirement
        value_datails[14].textContent = firstHear
        value_datails[15].textContent = whyWant
        value_datails[16].textContent = expectations
        console.log(value_datails)
        value_datails.forEach(e=>{
        if(e.textContent == ""){
                e.textContent = "NA"
            }
        })

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