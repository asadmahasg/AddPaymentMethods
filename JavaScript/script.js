let first = document.getElementById("check-1");
let second = document.getElementById("check-2");
let third = document.getElementById("check-3");

let h1 = document.getElementById("visaHeading");
let h2 = document.getElementById("masterHeading");
let h3 = document.getElementById("maestroHeading");
console.log("JS called");
function visaClicked(){
    second.style.visibility = 'hidden';
    third.style.visibility = 'hidden';
    first.style.visibility = 'visible';
    h1.style.color = 'black';
    h2.style.color = 'lightgray';
    h3.style.color = 'lightgrey';
    console.log(h1);
    console.log("visa Clicked");
}
function masterClicked(){
    first.style.visibility = 'hidden';
    third.style.visibility = 'hidden';
    second.style.visibility = 'visible';

    h2.style.color = 'black';
    h1.style.color = 'lightgray';
    h3.style.color = 'lightgrey';
    console.log("master Clicked");
}
function maestroClicked(){
    first.style.visibility = 'hidden';
    second.style.visibility = 'hidden';
    third.style.visibility = 'visible';

    h3.style.color = 'black';
    h1.style.color = 'lightgray';
    h2.style.color = 'lightgrey';
    console.log("maestro Clicked");
}