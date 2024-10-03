


const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = `You are subscribe`;
    }else{
        subresult.textContent = `you are NoT subcribed!`;
    }

    if(visabtn.checked){
        paymentresult.textContent = `you are paying with visa!`;
    } 
    else if(mastercard.checked){
        paymentresult.textContent = `you are  paying with mastercard!`;
    }
    else if(paypalbtn.checked){
        paymentresult.textContent = `you are paying with paypal`;
    }
    else{
        paymentresult.textContent = `you must select a payment type`;
    }
}