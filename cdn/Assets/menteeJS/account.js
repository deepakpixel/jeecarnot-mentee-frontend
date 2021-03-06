

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

//get data of user
async function getData(){
    const getProfileDetails = await fetch("https://mentee.jeecarnot.com/profile/my-profile");

    let data = await getProfileDetails.json();
    data = {
        "type": "success",
        "user": {
            "id": "600f2293865344148eb65115",
            "name": "Test_User",
            "email": "test@test.com",
            "phone": "9999988888",
            "gender": "NA",
            "alternatephone": "",
            "parentname": "",
            "parentPhone": "",
            "class": "",
            "lastAttemptJeeYear": "",
            "lastAttemptJeepercentile": "",
            "targetYear": "",
            "modePreparation": "",
            "otherTargetExams": "",
            "firstHear": "",
            "whyWant": "",
            "expectations": "",
            "language": "",
            "materialRequirement": "",
            "plan": "Silver",
            "mentorID": "600f1f6c2a1db11316aa2187",
            "mentorAssign": "2021-02-02T18:25:24.000Z",
            "mentorAssignDate": "2021-02-02T18:25:24.000Z",
            "emailVerification": true,
            "profileVerification": false,
            "membershipExpiresOn": "2021-08-01T00:00:00.000Z"
        }
    }
    let rawDate = await data.user.membershipExpiresOn;
    console.log(rawDate)
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date(rawDate)
    let expireDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} `
    console.log(expireDate)

    // <p class="acc-plan">...</p>
    //                      <p class="purchased-on">...</p>
    //                      <p class="expires-on">...</p>
    document.querySelector(".acc-plan").textContent = data.user.plan
    document.querySelector(".expires-on").textContent = expireDate

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

 //tab acc, ch pass, pay history.
 const tabs = document.querySelectorAll(".membership");
 const headBtns = document.querySelectorAll(".account-head p");
 headBtns.forEach((e,id)=>{
     headBtns[0].style.backgroundColor = "#09206F"
     headBtns[0].style.color = "#fff"
     headBtns[0].style.borderBottom = "3px solid #09206F"
     
     e.addEventListener("click",evt=>{
        for(let i of headBtns){
            i.style.color = "#09206F"
            i.style.backgroundColor = "#fff"
            i.style.borderBottom = "none"
         }
        tabs.forEach(item=>{
            item.classList.remove("hidden")
        })

        e.style.borderBottom = "3px solid #09206F"
        e.style.backgroundColor = "#09206F"
        e.style.color = "#fff"
        tabs[id].classList.add("hidden")
     })
 })

 const save_pass = document.querySelector(".save-pass")
 const pass_input = document.querySelectorAll(".acc-pass-input input")
console.log(pass_input)
 save_pass.addEventListener("click",evt=>{

     let error = false;
     pass_input.forEach(e=>{
        if(/^\s*$/.test(e.value)){
            error =true
            console.log(e.value.length)
            return swal(
                "Error",
                "Enter all inputs",
                "warning"
            )
        }
        if(pass_input[1].value != pass_input[2].value){
            error = true
            return swal(
                "Error",
                "Confirm same password",
                "warning"
            )
        }
    })
    if(!error){
        save_pass.disabled = true
        save_pass.style.cursor = "not-allowed"
        save_pass.textContent += "..."
        fetch("https://mentee.jeecarnot.com/account/change-password",{
            method : "POST",
            "Content-Type" : "application/json",
            body : JSON.stringify({
                newPassword : pass_input[2].value,
                oldPassword: pass_input[0].value
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            save_pass.disabled = false
            save_pass.style.cursor = "pointer"
            save_pass.textContent = "Save Changes"
        })
    }
 })