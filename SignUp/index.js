const signupForm = document.querySelector('#signupForm');
const popup = document.querySelector('.popup');
const verifyPhn = document.querySelector('.verify-phn');
const verifyOtp = document.querySelector('.verify-otp');
const otp_input = document.querySelectorAll('#otp input')
const pass = document.querySelectorAll("input[type=password]")
const signupInput = document.querySelectorAll('.inp')
const errorLine = document.querySelectorAll('#signupForm div p')

console.log(errorLine)
document.querySelector('#otp').addEventListener('submit',e=>{
    e.preventDefault()
})
signupForm.addEventListener('submit',e=>{
    e.preventDefault()
})
verifyPhn.addEventListener('click', e =>{
    let error;
    signupInput.forEach(e=>{
        if(e.value == ""){
           
            e.parentElement.children[1].style.display = "block" ;
            error = true;
        }
        else{
            e.parentElement.children[1].style.display = "none" ;
        }
        if(pass[0].value != pass[1].value ){
            error=true
            e.parentElement.children[1].style.display = "none"
            errorLine[7].style.display = "block"
        }
        else{
            errorLine[7].style.display = "none"  
        }
        
    })
    if(error){
        return
    }
    // if(pass[0].value != pass[1].value ){
    //     return errorLine[7].style.display = "block"
    // }else{
    //      errorLine[7].style.display = "none"  
    // }

    // show popup
    popup.classList.add('popup-visible')
    document.querySelectorAll('#signupForm .inp').forEach(e=>{
        e.value = ""
    })
    document.querySelectorAll('#otp input').forEach(e=>{
        e.value = ""
    })
    document.body.style.pointerEvents = "none";
})

function otpEnterEvent(item,id){
    if(item.value.length){
        document.getElementById(id).focus();
    }
}
function clearInput(item,id){
   item.addEventListener('keyup',e=>{
       if(e.key === "Backspace"){
           if(id > 0){
               if(id == 3){
                   item.value = ""
               }
               otp_input[id-1].focus()
           }
       }
    //    if(e.key === "ArrowLeft"){
    //     if(id > 0)
    //        otp_input[id-1].focus()
    //     }
    //     if(e.key === "ArrowRight"){
    //         if(id < 3)
    //        otp_input[id+1].focus()
    //    }
   })
}

