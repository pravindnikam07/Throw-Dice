const roll = document.querySelector('#roll');
const member1 = document.querySelector('#member-1');
const member2 = document.querySelector('#member-2');
const member3 = document.querySelector('#member-3');
const winner = document.querySelector('#winner');

roll.addEventListener("click", diceScore);
function diceScore(){
    let scoreA = Math.floor(Math.random()*6+1);
    let scoreB = Math.floor(Math.random()*6+1);
    let scoreC = Math.floor(Math.random()*6+1);
    member1.textContent = "Member A : "+scoreA;
    member2.textContent = "Member B : "+scoreB;
    member3.textContent = "Member C : "+scoreC;
    member1.style.color = 'white';
    member2.style.color = 'white';
    member3.style.color = 'white';
    if(scoreA>scoreB && scoreA>scoreC){
        winner.textContent = "Winner :- "+"Member A";
        document.getElementById("member-1").style.backgroundColor = 'green';
        if(scoreB===scoreC){
            document.getElementById("member-2").style.backgroundColor = 'blue';
            document.getElementById("member-3").style.backgroundColor = 'blue';
        }
        else if(scoreB>scoreC){
            document.getElementById("member-2").style.backgroundColor = 'yellow';
            member2.style.color = 'black';
            document.getElementById("member-3").style.backgroundColor = 'red';
        }
        else{
            document.getElementById("member-3").style.backgroundColor = 'yellow';
            member3.style.color = 'black';
            document.getElementById("member-2").style.backgroundColor = 'red';
        }
    }
    else if(scoreB>scoreA && scoreB>scoreC){
        winner.textContent = "Winner :- "+"Member B";
        document.getElementById("member-2").style.backgroundColor = 'green';
        if(scoreA===scoreC){
            document.getElementById("member-1").style.backgroundColor = 'blue';
            document.getElementById("member-3").style.backgroundColor = 'blue';
        }
        else if(scoreA>scoreC){
            document.getElementById("member-1").style.backgroundColor = 'yellow';
            member1.style.color = 'black';
            document.getElementById("member-3").style.backgroundColor = 'red';
        }
        else{
            document.getElementById("member-3").style.backgroundColor = 'yellow';
            member3.style.color = 'black';
            document.getElementById("member-1").style.backgroundColor = 'red';
        }
    }
    else if(scoreC>scoreB && scoreC>scoreA){
        winner.textContent = "Winner :- "+"Member C";
        document.getElementById("member-3").style.backgroundColor = 'green';
        if(scoreB===scoreA){
            document.getElementById("member-2").style.backgroundColor = 'blue';
            document.getElementById("member-1").style.backgroundColor = 'blue';
        }
        else if(scoreA>scoreB){
            document.getElementById("member-1").style.backgroundColor = 'yellow';
            member1.style.color = 'black';
            document.getElementById("member-2").style.backgroundColor = 'red';
        }
        else{
            document.getElementById("member-2").style.backgroundColor = 'yellow';
            member2.style.color = 'black';
            document.getElementById("member-1").style.backgroundColor = 'red';
        }
    }
    else if(scoreA===scoreB && scoreA===scoreC){
        winner.textContent = "Winner :- "+"Draw A & B & C";
        document.getElementById("member-1").style.backgroundColor = 'blue';
        document.getElementById("member-2").style.backgroundColor = 'blue';
        document.getElementById("member-3").style.backgroundColor = 'blue';
    }
    else if(scoreA===scoreB){
        winner.textContent = "Winner :- "+"Draw A & B";
        document.getElementById("member-1").style.backgroundColor = 'blue';
        document.getElementById("member-2").style.backgroundColor = 'blue';
        document.getElementById("member-3").style.backgroundColor = 'red';
    }
    else if(scoreA===scoreC){
        winner.textContent = "Winner :- "+"Draw A & C";
        document.getElementById("member-1").style.backgroundColor = 'blue';
        document.getElementById("member-3").style.backgroundColor = 'blue';
        document.getElementById("member-2").style.backgroundColor = 'red';
    }
    else if(scoreB===scoreC){
        winner.textContent = "Winner :- "+"Draw B & C";
        document.getElementById("member-2").style.backgroundColor = 'blue';
        document.getElementById("member-3").style.backgroundColor = 'blue';
        document.getElementById("member-1").style.backgroundColor = 'red';
    }
    else winner.textContent = "Winner :- "+"Draw";
}