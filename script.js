let menu=document.querySelector(".hamburger-icon");
let icon=true;
menu.addEventListener("click",()=>{
    if (icon===true){
        console.log("visible");
        icon=false;
    }
    else {
        console.log("not visible");
        icon=true;
    }




    // if(icon===true){
    // document.querySelector(".side-menu").style.display="visible";
    // icon=false;
    // }
    // else {
    //     document.querySelector(".side-menu").style.display="none";
    // icon=true;
    // }
});