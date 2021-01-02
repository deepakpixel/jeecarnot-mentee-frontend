const signupForm = document.querySelector('#signupForm');
const popup = document.querySelector('.popup');
const verifyPhn = document.querySelector('.verify-phn');
const verifyOtp = document.querySelector('.verify-otp');

document.querySelector('#otp').addEventListener('submit',e=>{
    e.preventDefault()
})
signupForm.addEventListener('submit',e=>{
    e.preventDefault()
})


verifyPhn.addEventListener('click', e =>{
    
    
    popup.classList.add('popup-visible')

    document.querySelectorAll('#signupForm input').forEach(e=>{
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
    else{
        console.log("empty")
    }
}
