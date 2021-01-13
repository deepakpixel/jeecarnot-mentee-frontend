const signupForm = document.querySelector('#signupForm');
const popup = document.querySelector('.popup');
const verifyPhn = document.querySelector('.verify-phn');
const verifyOtp = document.querySelector('.verify-otp');
const otp_input = document.querySelectorAll('#otp input')
const pass = document.querySelectorAll("input[type=password]")
const signupInput = document.querySelectorAll('.inp')
const errorLine = document.querySelectorAll('#signupForm div p')
const valid = document.querySelectorAll('.valid')

document.querySelector('#otp').addEventListener('submit',e=>{
    e.preventDefault()
})

verifyPhn.addEventListener('submit',e=>{
    e.preventDefault()
    
})
function showPassword(e){
    if (e.parentElement.children[0].type === "password") {
        e.parentElement.children[0].type = "text";
      } else {
        e.parentElement.children[0].type = "password";
      }
}

verifyPhn.addEventListener('click', e =>{
    
    // validation
    let error;

    // check for empty space
    signupInput.forEach(e=>{
        if(/^\s*$/.test(e.value)){
            e.value = ""
            error = true;
            e.parentElement.children[1].style.display = "block" ;
            valid[0].style.display = "none";
            valid[1].style.display = "none";
        }
        else{
            e.parentElement.children[1].style.display = "none" ;
        }

        if(pass[0].value != pass[1].value ){
            error=true
            pass[0].parentElement.children[1].style.display = "none"
            pass[1].parentElement.children[1].style.display = "none"
            errorLine[7].style.display = "block"
        }
        else{
            errorLine[7].style.display = "none"  
        }

    })
    
    // phone validation
    if(!(/^\d{10}$/.test(signupInput[1].value))) {
        error = true
        if(/^\s*$/.test(signupInput[1].value)){
            return
        }
        valid[0].style.display = "block";
    }
    
    // Email validation 
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;

    if(!mailformat.test(signupInput[2].value)) {
        error = true
        console.log("error in email")
        if(/^\s*$/.test(signupInput[2].value)){
            return
        }
        valid[1].style.display = "block ";
    }


    // Quit if error
    
    if(error){
        return
    }
    sendotp();
 // show popup
    const data = {
        name : signupInput[0].value,
        email : signupInput[2].value,
        password : signupInput[3].value,
        phone : signupInput[1].value,
       
    }
    document.getElementById("otpPhone").textContent=`+91-${data.phone}`
    
   
    // const sendotpUrl = "https://mentee.jeecarnot.com/register/api/send-otp"
   
    async function sendotp(){
        const firstRes = await fetch("https://mentee.jeecarnot.com/register/api/send-otp",{
            method : "POST",
            
            headers: {
                "Content-Type": "application/json"
            },
           
            body : JSON.stringify({
                name : signupInput[0].value,
                email : signupInput[2].value,
                phone : signupInput[1].value,
                password : signupInput[3].value,
            }) 
       })
       let res = await firstRes.json();
       console.log(firstRes);
       console.log(res);
    }
      
    
    console.log(data)
    popup.classList.add('popup-visible')
    timerFunction(61)
    // document.querySelectorAll('#signupForm .inp').forEach(e=>{
    //     e.value = ""
    // })
    document.querySelectorAll('#otp input').forEach(e=>{
        e.value = ""
    })
    document.body.style.pointerEvents = "none";
})

// otp input functionality
function otpEnterEvent(item,id){
    if(item.value.length){
        document.getElementById(id).focus();
    }
}
function clearInput(item,id){
   item.addEventListener('keyup',e=>{
       if(e.key == "Backspace"){
           if(id > 0){
               if(id == 3){
                   item.value = ""
               }
               otp_input[id-1].focus()
           }
       }
   })
}
//time for resend
const timer = document.querySelector('.timer')

const timerFunction =(a)=>{

    let time = setInterval(() => {
        let zero = (a > 10)? "": "0";
        
        timer.innerHTML =`0:${zero}${a-1}` 
        document.querySelector(".resend").style.color = "gray"
        document.querySelector(".resend").style.pointerEvents = "none"
        
        a=a-1;
        if(a==0){
            clearInterval(time)
            timer.style.display = "none"
            document.querySelector(".resend").style.color = ""
            document.querySelector(".resend").style.pointerEvents = "visible"
            return
        }
    }, 1000);
}

