const form=document.querySelector(".forme");
const pass=document.getElementById("password");
const cpass=document.getElementById("cpassword");

const errorM=document.getElementById("E");
form.addEventListener("submit",function(event){
    event.preventDefault();
    if(pass.value===cpass.value){
        if (errorM!== null) {
            errorM.textContent="";
        }
        form.submit();

        
    }
    else{
        if (errorM!== null) {
        errorM.textContent="Passwords dont match";
        alert("Passwords dont match");
        } 
    }

})