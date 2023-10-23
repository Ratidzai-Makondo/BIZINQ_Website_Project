//get data from the form
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");



//validating the data
function ValidateForm(){
    
    clearMessages();
    let errorFlag = false;

      if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
      }

      if(!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
      }

      if(message.value.length < 1){
        errorNodes[2].innerText = "IEnter your message";
       message.classList.add("error-border");
       errorFlag = true;
      }

      if(!errorFlag){
        success.innerText = "Success. We have received your message";
      }
    }

    
    //to clear error or sucess message
    function clearMessages(){ 
        for(let i = 0; i < errorNodes.length; i++)  {
            errorNodes[i].innerText = "";
        }
        success.innerText = "";
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        message.classList.remove("error-border");

    }

    //to check if the email is valid
 function emailIsValid(email){ 
        let pattern = /\S+@\S+\. \S+/;
        return pattern.test(email)
 }

 