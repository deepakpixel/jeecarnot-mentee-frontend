
const valid = document.querySelectorAll(".valid");
const email = document.querySelector(".email")
const pass = document.querySelector(".pass")
const loginInputs = document.querySelectorAll("#LoginForm div input")

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;

//if(/^\s*$/.test(e.value))
var error;
loginInputs.forEach(e=>{
    e.addEventListener("blur",evt=>{
        if(/^\s*$/.test(e.value)){
            error = true;
            e.value = ""
            e.parentElement.children[1].style.display = "block"
            e.parentElement.children[1].textContent = "Required"
        }
        else{
            error = false;
            e.parentElement.children[1].style.display = "none"
        }
        
        if(!/^\s*$/.test(email.value)){
            if(!mailformat.test(email.value)){
                error = true
               
                email.parentElement.children[1].style.display = "block"
                email.parentElement.children[1].textContent = "Email Id invalid!"
            }
        }
        if(!/^\s*$/.test(pass.value)){
           if(pass.value.length < 6){
               error = true
               pass.parentElement.children[1].style.display = "block"
               pass.parentElement.children[1].textContent = "Password must be more than 6 characters!"
           }
        }
    })
})
const loginBtn = document.querySelector(".verify-phn")

loginBtn.addEventListener("click",evt=>{
    evt.preventDefault()
    loginInputs.forEach(e=>{
        if(/^\s*$/.test(e.value)){
            error = true;
        }
    })
    if(!error){
         loginBtn.disabled = true
         loginBtn.style.cursor = "not-allowed"
         fetch("https://mentor.jeecarnot.com/login",{
             method : "POST",
             headers : {

                 "Content-type" : "application/json"
             },
             body : JSON.stringify({
                 email : email.value,
                 password : pass.value,
             })
         })
         .then(res => {
             console.log(res)
             loginBtn.disabled = false
             loginBtn.style.cursor = "pointer"
             return res.json()
        })
         .then(data => {
             console.log("data:",data)
             if (data.type == "success") {
                window.location.href = "https://mentor.jeecarnot.com/dashboard";
             }
             else{
                 swal(
                     "Error !",
                     "Incorrect Credentials",
                     "warning"
                 )
             }
        })
         .catch(err=> {
            console.log("err:",err);
        })
    }
})

function showPassword(e){
    if (e.parentElement.children[0].type === "password") {
        e.parentElement.children[0].type = "text";
      } else {
        e.parentElement.children[0].type = "password";
      }
}

