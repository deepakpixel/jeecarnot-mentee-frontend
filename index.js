
const form = document.querySelector('#payment_form')
form.addEventListener('submit',e =>{
   e.preventDefault()
})

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
      maxprice[i].innerText = data[i].maxprice
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


let DOMAIN = "https://pay.jeecarnot.com"


 //change it according to user

document.getElementById('txnid').value = Date.now();

document.getElementById('paybtn').addEventListener('click', async (e) => {

  try {
    let firstname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let txnid = document.getElementById('txnid').value;
    let productinfo = `${firstname}-${phone}-${email}`;
    document.getElementById('productinfo').value = productinfo;
   
   if(!firstname){
      return Swal.fire(
         'Enter Your Name !!',
         '',
         'error'
         )
      }
      if(!email){
         return Swal.fire(
            'Enter Your Email-Id !!',
            '',
            'error'
            )
         }
         if(!phone){
            return Swal.fire(
               'Enter Your Phone Number!!',
               '',
               'error'
               )
            }
         let data = {
              firstname,
              email,
              phone,
              txnid,
              productinfo,
              plan
         }
    console.log(data)
    var res = await fetch(DOMAIN + "/calculateHash", {
      method: "POST",
      body: new URLSearchParams(data),
    });

    res = await res.json(res)
    // check is success
    if (res.type != 'success')
      throw Error('Select a plan! ')

      document.getElementById('hash').value = res.hash;
      document.getElementById('amount').value = res.amount;
      // REAL SUUBMIT
     form.submit();
  } catch (error) {
       Swal.fire(
         'Error',
          error.message,
         'error'
      )
      return console.log('CRITICAL ERROR SHOW MESSAGE',error)
  }
})



