// Qs 1 . Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6].
let diceRoll = Math.floor(Math.random()*6)+1;
console.log(diceRoll);

// Qs 2 . Create an object representing a car that stores the following properties for the car : name, model, color. Print the car’s name.
let car = {
    name: "BMW GTR",
    model: 2020,
    color: "Jet Black"
};
console.log(car.name);

// Qs 3 . Create an object Person with their name, age and city. Edit their city’s original value and change it to “NewYork”.Add a new property country and set it to the United States.
let Person = {
    name: "Aryan",
    age: 20,
    city: "Meerut"
};
console.log("Before Change :",Person);
Person.city = "New York";
Person.country = "United States";
console.log("After Change :",Person);