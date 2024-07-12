
 function validateForm(){
  debugger
            event.preventDefault();
              
        let name= document.getElementById("name").value.trim();
        let email= document.getElementById("email").value.trim();
        let password= document.getElementById("password").value.trim();
       let confirmPassword =document.getElementById("confirmPassword").value;
       let regexp = /\S+@\S+\.\S+/;
       let regex =  /^[A-Za-z]\w{7,14}$/;
      debugger
     
        if( document.getElementById("name").value=="") {
            
            document.getElementById("nameErr").style.visibility = "visible";
            document.getElementById("name").required = true; 
             
    }
    else if(document.getElementById("email").value == "")
    {
        
         document.getElementById("emailErr").style.visibility = "visible";
    }
   
    else if(!regexp.test(email)){

     
       
                console.log("hi");
                 document.getElementById("emailErr").innerHTML="please enter a valid Email";
                 document.getElementById("emailErr").style.visibility = "visible";
            

    }
   else if(document.getElementById('password').value=='')
    {
        document.getElementById("passswordErr").style.visibility="visible";
    }
    else if (document.getElementById('password').value.length<8 || !regex.test(password))
    {
       
        
        document.getElementById("passswordErr").innerHTML="password must be 8 characters long and strong";
        
    }
    else if(document.getElementById('password').value != document.getElementById('confirmPassword').value)
    {
      document.getElementById("confirmpasswordErr").style.visibility="visible";
      
    }
    
    else{
       alert("form submitted successfully");
       window.location.href="./login_page.html";
       
    }
    
        
}
function changeHiddenToVisible(){
  
    let name= document.getElementById("name").value.trim();
    let email= document.getElementById("email").value.trim();
    let password= document.getElementById("password").value.trim();
   let confirmPassword =document.getElementById("confirmPassword").value;
   let regexp = /\S+@\S+\.\S+/;
   let regex =  /^[A-Za-z]\w{7,14}$/;
    if(document.getElementById("name").value!="") {
    
        document.getElementById("nameErr").style.visibility = "hidden";
    }
     if(document.getElementById("email").value!="" && regexp.test(email)) {

        document.getElementById("emailErr").style.visibility = "hidden";
     }

    if(document.getElementById('password').value!='' && document.getElementById('password').value.length>8 && regex.test(password))
        {
            document.getElementById("passswordErr").style.visibility="hidden";
        }
        if(document.getElementById('confirmPassword').value!='' && document.getElementById('password').value == document.getElementById('confirmPassword').value){
            document.getElementById("confirmpasswordErr").style.visibility="hidden";
        }
}