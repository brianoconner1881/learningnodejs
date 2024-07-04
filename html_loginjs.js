 function validateform(){
            debugger
            event.preventDefault();
            
        let name= document.getElementById("name").value.trim();
        let email= document.getElementById("email").value.trim();
        let password= document.getElementById("password").value.trim();
        let confirmpassword= document.getElementById("confirmpassword").value.trim();
        if( document.getElementById("name").value=="") {
            
            alert("no name");
             
    }
    else if(document.getElementById("email").value == "")
    {
        alert("please enter your email");
    }
    else if(document.getElementById('password').value=='')
    {
        alert("please enter a password");  
    }
    else if(document.getElementById('password').value != document.getElementById('confirmPassword').value)
    {
        debugger
        alert("passwords do not match");
    }
    
    else{
       alert("form submitted successfully");
       location.href="./login_page";
       
    }
    
        
}
