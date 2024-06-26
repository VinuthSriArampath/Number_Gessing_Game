
let gen=Math.floor((Math.random()*10)+1);
document.getElementById("lblout").innerHTML=null;
console.log(gen);
document.getElementById("guess").addEventListener("click",guesscheck)
let x=1
function guesscheck(){
    let num=document.getElementById("txtguess").value;
    
    if(x!=5){
        if(gen==num){
            console.log(document.getElementById("txtguess").value);
            document.getElementById("lblout").innerHTML="Good , Number Guessed Correctly";
            document.getElementById("lbltry").innerHTML=`You have used ${x} tryies`;
        }else if(gen>num){
            console.log(document.getElementById("txtguess").value);
            document.getElementById("lblout").innerHTML="Sorry , You guessed a lesser value"; 
            document.getElementById("lbltry").innerHTML=`You have ${5-x} have tryies`;

        }else if(gen<num){
            console.log(document.getElementById("txtguess").value);
            document.getElementById("lblout").innerHTML="Sorry , You guessed a Higher value";
            document.getElementById("lbltry").innerHTML=`You have ${5-x} have tryies`;
        }
        x++;
    }else{
        document.getElementById("lbltry").innerHTML="No tries left,Try again latter"
    }
}