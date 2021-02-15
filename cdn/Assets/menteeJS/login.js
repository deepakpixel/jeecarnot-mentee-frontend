
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
        
        console.log("in",error)
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
        const data = {
            email : loginInputs[0].value,
            password : loginInputs[1].value
        }
        login(data)
    }
})

function showPassword(e){
    if (e.parentElement.children[0].type === "password") {
        e.parentElement.children[0].type = "text";
      } else {
        e.parentElement.children[0].type = "password";
      }
}

const login = async (data)=>{
    loginBtn.disabled = true
    loginBtn.style.cursor = "not-allowed"
    loginBtn.value = "Login..."
    const firstRes = await fetch("https://mentee.jeecarnot.com/login",{
        method : "POST",
        
        headers: {
            "Content-Type": "application/json",
            "Cookie": "connect.sid=value",
        },
       
        body : JSON.stringify(data) 
   })
   let res = await firstRes.json();
   
   console.log(firstRes);
   console.log(res);
   
   if(res.type == "success"){

        loginBtn.disabled = false
        loginBtn.style.cursor = "pointer"
        loginBtn.value = "Login"
    
        swal({
            title: "Success",
            text: res.msg,
            icon: "success",
        }).then(function() {
            window.location = "/account";
        });
    }
    else{
        loginBtn.disabled = false
        loginBtn.style.cursor = "pointer"
        loginBtn.value = "Login"
       
        swal(
            'Error',
            res.msg,
            "warning"
        )
    }
}


// fetch("https://mentee.jeecarnot.com/isloggedin", { 
//     headers :{ 
//         "Cookie": "connect.sid=value"
//     }

// }).then(res=>res.json()).then(data=>console.log(data))