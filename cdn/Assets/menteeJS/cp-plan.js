


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

const planBox = document.getElementsByClassName('plan-box')
var plan;

for(let item of planBox){
   item.addEventListener('click',()=>{
     document.querySelectorAll('.plan-box').forEach(e=>{
         e.classList.remove('clicked-plan')
      })
      item.classList.add('clicked-plan')

      if(item.classList.contains('clicked-plan')){
         plan = item.dataset.id
      }
      console.log(plan)
   })
}
