//SomeOther Events


let copyRight=document.querySelector('.copy');

 copyRight.addEventListener('copy',(e)=>{
     
     e.preventDefault();
     console.log("what is going.. u cant copy")
     alert("You Cant Copy This text");
     
    //  navigator.clipboard.write("abbas");
})
copyRight.addEventListener('mousemove',(e)=>{
     
   console.log(e.offsetX,e.offsetY) 
    // e.target.remove();
   //  navigator.clipboard.write("abbas");
})
