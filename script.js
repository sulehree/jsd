// Forms Events
formElement= document.querySelector('.signupForm');
//console.log(formElement)


console.log(window.open("ht"));
formElement.addEventListener('submit',(e)=>{
         e.preventDefault(); // we have added this.. to stop submit default behavour of submiting form and refreshing the document
        // console.log("abbas")
        //  console.log(e.target.userEmail.value,e.target.userpassword.value) // by giving name tag in input we can access it later on with target.name
        // console.log("abbas");
       //  console.log(formElement.userEmail.value,formElement.userpassword.value); // if name tag is given we can also access value by this way
        if(formElement.userpassword.value=="")
        {console.log("password is empty")
    }
})
 