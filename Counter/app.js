let count=0;

let value= document.querySelector("#value");
let btnDec = document.querySelector(".decrease");
let btnInc = document.querySelector(".increase");
let btnRes = document.querySelector(".reset");

btnDec.addEventListener("click", function dec(){
    count--;
    value.innerText = count;
    if (count > 0){
    value.style.color = "green";}
    else if (count< 0){
        value.style.color = "red";
    }
    else{
        value.style.color ="black";
    }
});

btnInc.addEventListener("click", function inc(){
    count++;
    value.innerText = count;
    if (count > 0){
    value.style.color = "green";}
    else if (count< 0){
        value.style.color = "red";
    }
    else{
        value.style.color ="black";
    }
});

btnRes.addEventListener("click", function rst(){
    count = 0;
    value.innerText = count;
    value.style.color = "black";
});








