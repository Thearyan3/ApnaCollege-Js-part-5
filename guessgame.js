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
        console.log("Your guess was right. Congrats!! random number was : ",random);
        break;
    }else if(guess > random){
        guess = prompt("Guess is greater than the number. Please Enter a smaller number.");
    }else if(guess < random){
        guess = prompt("Guess is smaller than the number. Please Enter a greater number.");
    }
    // else{
    //     guess = prompt("Please Guess Again :");
    // }
}