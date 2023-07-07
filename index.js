var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDice="dice"+randomNumber1+".png";
var randomSrc="images/"+randomDice;
document.querySelectorAll("img")[0].setAttribute("src",randomSrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomSrc2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSrc2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins !";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins !";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}