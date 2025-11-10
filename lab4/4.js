//Array Destructuring
//ex1
//C1
function getFirstLast(array) {
  const [first, , ,four] = array;
  return [first,four];
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]
//C2
function getFirstLast(array) {
  const [first] = array;
  const last = array[array.length - 1];
  return [first,last];
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

//ex2
//C1
function swapElements(arr) {
  [arr[1], arr[3]] = [arr[3],arr[1]];
  return arr;
}
console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

//Object Destructuring
//ex3
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const { 
    name,
    contact:{
        email
    }
  } = user.personalInfo;
  return {name, email};
}

console.log(getUserInfo(user));// { name: 'javascript', email: 'javascript@email.com' }

//ex4
function createProduct({ name, price, category = "general", inStock = true }) {
  const product = {
    name: name,
    price: price,
    category: category,
    inStock: inStock
  };
  return product;
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);// { name: 'Laptop', price: 999, category: 'general', inStock: true }

//Promises
//ex5
function delay(ms) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}

delay(2000).then(() => console.log("2 seconds passed"));

//ex6
function fetchMultipleData(urls) {
  const promises = urls.map(url =>
    fetch(url).then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status} for ${url}`);
      }
      return res.json();
    })
  );
  return Promise.all(promises);
}

fetchMultipleData(["https://jsonplaceholder.typicode.com/users/1","https://jsonplaceholder.typicode.com/users/2"])
  .then(users => {
    console.log("Fetched successfully:");
    console.log(users);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });