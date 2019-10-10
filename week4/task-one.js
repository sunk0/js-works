
const getUserChoice = input => { 
  if(typeof input ==='string'){
    let inputLower = input.toLowerCase();
    if(inputLower === "rock"){
      return "rock";
    }else if(inputLower === "paper"){
      return "paper";
    }
    else if(inputLower === "scissors"){
      return "scissors";
    }
    else{
      return inputLower;
    }
  }else{
    return "TYPE STRING!!!"
  }
}

// END OF USER CHOICE

const getComputerChoice = () => {
     let randomNumber = Math.round(Math.random() * 2);
     if(randomNumber === 0){
       return "rock";
     }
     else if(randomNumber === 1){
        return "paper";
     }
      else if(randomNumber ===2){
       return "scissors";
    }
}

// END OF COMPUTER CHOICE

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice){
    return "Tie!";
    }else if (userChoice === 'paper' && computerChoice === 'rock'){
      return"User win!";
    }else if (userChoice === 'rock' && computerChoice === 'scissors'){
      return"User win!";
    }else if (userChoice === 'scissors' && computerChoice === 'rock'){
      return"Computer win!";
    }else if (userChoice === 'rock' && computerChoice === 'paper'){
      return"Computer win!";
    }else if (userChoice === 'paper' && computerChoice === 'scissors'){
      return"Computer win!";
    }else if (userChoice === 'scissors' || computerChoice === 'paper'){
      return"User win!";
    }else{
      return("Invalid input, please try again");
    }
}
// END OF DETERMINEWINNER
const playGame = input => {
     const userChoice = getUserChoice(input); 
     const computerChoice = getComputerChoice();
     console.log(`User threw ${userChoice}`);
     console.log(`Computer threw ${computerChoice}`);
     console.log(determineWinner(userChoice,computerChoice));
}

playGame("paper");