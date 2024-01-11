// classList -shows/lists all classes
// contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


// This function means if the class links contains the class show-links then remove the class show-links else add the class show-links 

navToggle.addEventListener("click",function (){
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }
    else{
        links.classList.add("show-links");
    }


    //  links.classList.toggle("show-links");
    
// this piece of code also can be used to create a toggling navbars
    
})