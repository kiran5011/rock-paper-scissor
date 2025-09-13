let userscore=0;
let compscore=0;
let drawscore=0;
function generatechoice(){
    let randomNumber= (Math.random()*3);
    if(randomNumber>0 && randomNumber<1){
        return 'Rock';}
    else if (randomNumber>1 && randomNumber<2){
        return 'Paper';}
    else{
        return 'Scissors';
    }
}
function getresult(userchoice,computerchoice){
    if(userchoice==='Rock'){
        if(computerchoice==='Rock')
            {   drawscore++;
                return 'Its a tie';   }
        else if(computerchoice==='Paper'){
        compscore++;
        return 'Computer win';    }
        else{   userscore++;
                return 'You win';   }    }
    else if(userchoice==='Paper'){
        if(computerchoice==='Rock'){
            userscore++;
            return 'You win';    }
        else if(computerchoice==='Paper'){
        drawscore++;      
        return 'its a tie';   }
        else{compscore++;
            return 'Computer win';    }    }
    else if(userchoice==='Scissors'){
        if(computerchoice==='Rock'){ 
            compscore++;
            return 'Computer win';}
        else if(computerchoice==='Paper'){  
            userscore++;
            return 'You win'; }
        else{   drawscore++;
             return 'Its a tie';}
    }
}
function play(userchoice){
    computerchoice=generatechoice();
    result=getresult(userchoice,computerchoice);
    displayresult(userchoice,computerchoice);
    displayscore();
}
function displayresult(userchoice,computerchoice){
    document.querySelector('.result').innerText=`You choose ${userchoice}
     Computer choose ${computerchoice} 
    result: ${result}`;
}
function displayscore(){
    document.querySelector('.scoreboard').innerText=
    `Your Score : ${userscore}
    computer score: ${compscore}
    draw : ${drawscore}
    `;
}
