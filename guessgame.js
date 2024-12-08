// Game - User enters a max number & then tries to guess a random generated number between 1 to max. 

const max = prompt("Enter a maximum Number :");

const random = Math.floor(Math.random() * max) + 1;

