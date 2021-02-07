var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice" + randomNumber1 +".png";
var randomImagesrc1="images/"+randomImage;
 document.querySelector("img").setAttribute("src", randomImagesrc1);



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImagesrc2="./images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent= " Play 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent= " Play 2 Wins!";
}
else{
    document.querySelector("h1").textContent= " DRAW!!!";
}