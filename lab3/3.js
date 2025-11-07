//ex1
// Function 1
const multiply = (a, b) => a * b;

// Function 2
const isPositive = (number) => number >= 0;

// Function 3
const getRandomNumber = () => Math.random();

// Function 4
document.addEventListener("click", () => console.log("Clicked!"));

//ex2
const createUser = (name ="Anonymous", age = 18, isAdmin =false) => ({
    name,
    age,
    isAdmin,
});