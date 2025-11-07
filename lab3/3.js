//ex1
// Function 1
const multiply = (a, b) => a * b;
console.log(multiply(1,2));

// Function 2
const isPositive = (number) => number >= 0;
console.log(isPositive(2));

// Function 3
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

// Function 4
document.addEventListener("click", () => console.log("Clicked!"));

//ex2
const createUser = (name ="Anonymous", age = 18, isAdmin =false) => ({
    name,
    age,
    isAdmin,
});
console.log(createUser());

//ex3
const mergeArrays = (...arrs) => [].concat(...arrs);
console.log(mergeArrays([1,2],[3,4]));
const sumAll = (...numbers) => numbers.reduce((total,num)=>total + num,0);
console.log(sumAll(3,7,8,12));
const createProduct = (name = "ip",price = 10000,description = "abcc") => ({
  name,
  price,
  description,
});
console.log(createProduct());

//ex4
const shoppingCart = (customerName, ...products)=>{
    return {
        customer: customerName || "Khách",
        items: products.length ? products : ["không có sp nào"],
        itemCount: products.length,
        message: `Khách hàng ${customerName} đã mua ${products.length} sản phẩm`,
    };
};
console.log(shoppingCart("Hien","sp1","sp2"));