
const form = document.querySelector('#payment_form')
form.addEventListener('submit',e =>{
   e.preventDefault()
})

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

for(let item of planBox){
   item.addEventListener('click',()=>{
      item.classList.toggle('clicked-plan')
      for(let i of item.classList){
         if(i == "clicked-plan"){
             this.plan = Number(item.id);
            }
            else{
               this.plan = "";
         }
      }
      console.log(this.plan)
   })
}
// Payent part

let DOMAIN = "https://pay.jeecarnot.com"


 //change it according to user

document.getElementById('txnid').value = Date.now();

document.getElementById('paybtn').addEventListener('click', async (e) => {

  try {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let txnid = document.getElementById('txnid').value;
    let productinfo = `${name}-${phone}-${email}`;
    document.getElementById('productinfo').value = productinfo;
   //  document.getElementById('amount').value = this.plan
   if(!name){
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
              name,
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
      throw Error('OOPs')

      document.getElementById('hash').value = res.hash;
      document.getElementById('amount').value = res.amount;
      // REAL SUUBMIT
      document.getElementById('proceed').click()
  } catch (error) {
       Swal.fire(
         'Select a Plan',
         error,
         'error'
      )
      return console.log('CRITICAL ERROR SHOW MESSAGE',error)
  }
})



