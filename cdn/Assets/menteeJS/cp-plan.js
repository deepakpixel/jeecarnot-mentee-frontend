

getData()
// fetching plan from API
const url =" https://pay.jeecarnot.com/plans"
fetch(url)
.then(res=>res.json())
.then(data => handlePlan(data))

const planName = document.getElementsByClassName('plan-name')
const amount = document.getElementsByClassName('amount')
const maxprice = document.getElementsByClassName('maxprice')
const validity = document.getElementsByClassName('validity')

const handlePlan = (data) =>{
   
   for(let i in data){
      planName[i].innerText = data[i].name
      amount[i].innerText = `Rs. ${data[i].amount}`
      maxprice[i].innerText =`Rs. ${data[i].maxprice}`
      validity[i].innerText = data[i].comment
   }
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
      let userID ;
   const planBox = document.getElementsByClassName('plan-box')
   var plan;

     userID = data.user.id
     for(let item of planBox){
      item.addEventListener('click',()=>{
        document.querySelectorAll('.plan-box').forEach(e=>{
            e.classList.remove('clicked-plan')
         })
         item.classList.add('clicked-plan')
   
         if(item.classList.contains('clicked-plan')){
            plan = item.dataset.id
         }
         document.querySelector(".nextBtn").addEventListener("click",e=>{
            console.log("loc")
            location.href=`https://mentee.jeecarnot.com/pay/checkout?plan=${plan}&id=${userID}`
         })
      })
   }
   
   }
   else{
       swal(
         "Error",
          data.err,
         'warning'
       )
   }
}


