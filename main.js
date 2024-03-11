let inc=document.getElementsByClassName("inc");
let quant=document.getElementsByClassName("quant");
let prix=document.getElementsByClassName("prix-uni");
let totPrice=document.getElementById("total");

for (let i=0;i<inc.length;i++){
    inc[i].addEventListener("click",function(){
        inc[i].nextElementSibling.innerText++;
        totalPrice();
    })
    
}
let dec=document.getElementsByClassName("dec");


for (let j=0;j<dec.length;j++){
    
       dec[j].addEventListener("click",function(){
        if (dec[j].previousElementSibling.innerText>0) {
        dec[j].previousElementSibling.innerText--;
        totalPrice();
        }
    })
}
let del=document.getElementsByClassName("del");

for (let i=0;i<del.length;i++){
    let supp=del[i];
    supp.addEventListener("click",function(event){
        but= event.target;
        but.parentElement.parentElement.remove();
        if(del.length ===0){
            alert("empty bag");
        }
        totalPrice();
    })

}
let btn = document.getElementsByClassName("btn");
 for (let i=0;i<btn.length;i++ ) {
    let clr=document.querySelectorAll("i");
    btn[i].addEventListener("click", function (){
      clr[i].classList.toggle("bgchange");
    })
 }

function totalPrice(){
    let sum=0;
    for ( let j=0;j<quant.length;j++) {
        sum+=(quant[j].innerText * prix[j].innerText);
    }
   totPrice.innerText=sum;
}