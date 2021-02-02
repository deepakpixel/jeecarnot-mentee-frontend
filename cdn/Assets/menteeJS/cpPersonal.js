const inputAll = document.querySelectorAll(".all-input")
//console.log(inputAll)

//Get details of mentee
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
        const {name,email,phone} = data.user;
        document.querySelectorAll(".details-field")[0].textContent = name
        document.querySelectorAll(".details-field")[1].textContent = email
        document.querySelectorAll(".details-field")[2].textContent = `+91-${phone}`

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

function updateProfile(){
    let mop = document.getElementsByName("mop")
    let lang = document.getElementsByName("lang")
    let mopValue = ""
    let language = ""
    mop.forEach(e=>{
        if(e.checked){
           mopValue = e.value
        }
    })
    lang.forEach(e=>{
        if(e.checked){
           language = e.value
        }
    })
    //console.log(mopValue,language)
    let data = {
        altPhone : inputAll[0].value,
        parentName : inputAll[1].value,
        parentPhone :  inputAll[2].value,
        class :  inputAll[3].value,
        lastJEE :  inputAll[4].value,
        lastPercentile :  inputAll[5].value,
        targetYear :  inputAll[6].value,
        prepMode :  mopValue,
        otherTargets :  inputAll[9].value,
        language :  language,
        materialRequirement :  inputAll[12].value,
        firstHear :  inputAll[13].value,
        whyUs :  inputAll[14].value,
        expectations :  inputAll[15].value,

    }
    submitData(data);
}

const nextBtn = document.querySelector(".nextBtn")

async function submitData(data){
    nextBtn.textContent = "loading..."
    nextBtn.disabled = true
    nextBtn.style.cursor = "not-allowed"
    let response = await fetch("https://mentee.jeecarnot.com/profile/update-profile" ,{
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    let res = await response.json()
    console.log(res,"\n",data)
    if(res.type == "success"){

        swal({
            title: "Success",
            text: res.msg,
            icon: "success",
            button : "Next"
        }).then(function() {
            window.location = "/"
        })

        nextBtn.textContent = "Next"
        nextBtn.disabled = false
        nextBtn.style.cursor = "pointer"
    }
    else{
        let errorMsg = ""
        if(res.err){
            errorMsg = res.err
        }
        if(res.msg){
            errorMsg = res.msg
        }
        swal(
            "Error",
            errorMsg,
            'warning'
        )
        nextBtn.textContent = "Next"
        nextBtn.disabled = false
        nextBtn.style.cursor = "pointer"
    }
}