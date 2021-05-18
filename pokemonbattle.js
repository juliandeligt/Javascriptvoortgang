const game = () => {
    let playerScore = 6;
    let computerScore = 6;
  
  
    const playGame = () => {
        const squirlBtn = document.querySelector('.squirtle');
        const charmBtn = document.querySelector('.charmander');
        const bulbBtn = document.querySelector('.bulbasaur');
        const magiBtn = document.querySelector('.magikarp');
        const playerOptions = [squirlBtn,charmBtn,bulbBtn,magiBtn];
        const computerOptions = ['squirtle','charmander','bulbasaur','magikarp']
          
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){                 
  
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
  
                winner(this.innerText,computerChoice)
                  
                if(computerScore === 0 || playerScore === 0){
                    gameOver(playerOptions);
                }
            })
        })
          
    }

    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Allebei missen jullie je aanval!'
        }
        else if(player == 'squirtle'){
            if(computer == 'bulbasaur'){
                result.textContent = 'Bulbasaur doet Vine Whip en verslaat Squirtle. Punt rivaal!';
                playerScore--;
                playerScoreBoard.textContent = playerScore;
  
            }else{
                result.textContent = 'Squirtle doet Bubble en verslaat Charmander. Punt voor jou!'
                computerScore--;
                computerScoreBoard.textContent = computerScore;
            }
        }
        else if(player == 'bulbasaur'){
            if(computer == 'charmander'){
                result.textContent = 'Charmander doet Ember en verslaat Bulbasaur. Punt rivaal!';
                playerScore--;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Bulbasaur doet Razor Leaf en verslaat Squirtle. Punt voor jou!';
                computerScore--;
                computerScoreBoard.textContent = computerScore;
            }
        }
        else if(player == 'charmander'){
            if(computer == 'squirtle'){
                result.textContent = 'Squirtle doet Water Gun en verslaat Charmander. Punt rivaal!';
                playerScore--;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Charmander doet Fire Fang en verslaat Bulbasaur. Punt voor jou!';
                computerScore--;
                computerScoreBoard.textContent = computerScore;
            }
        }
        else if(player == 'magikarp'){
                result.textContent = 'Niemand kan op tegen de aanval "splash" van Magikarp! Punt voor jou!';
                computerScore--;
                computerScoreBoard.textContent = computerScore;
        }
    }
  
    const gameOver = playerOptions => {
  
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
  
       
        chooseMove.innerText = 'De laatste Pokemon is uitgeschakeld! De battle is afgelopen!'
  
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'Je hebt gewonnen!'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'Je rivaal wint!';
            result.style.color = 'red';
        }
        reloadBtn.innerText = 'Nog een battle?';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
  
  
    playGame();
      
}
game();