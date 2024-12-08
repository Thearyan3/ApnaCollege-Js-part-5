// Game - User enters a max number & then tries to guess a random generated number between 1 to max. 

const max = prompt("Enter a maximum Number :");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Please guess the Number :");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    
    if(guess == random){
        console.log("Your guess was right. Congrats!!");
        break;
    }else{
        guess = prompt("Please Guess Again :");
    }
}