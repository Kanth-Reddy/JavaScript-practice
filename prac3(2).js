let guessNum = 28;

let UserNum = prompt("Enter the game number: ");

while(UserNum != guessNum){
    UserNum = prompt("Your Entered the wrong nunmber, Guess again");
    console.log("Entered wrong number");
}

console.log("Congratulations, You entered the correct number"); 