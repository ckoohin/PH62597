//ex1
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); 
  }, 100);
}

//ex2
//Cách 1
const student = {
  name: "ThuyTien",
  age: 20,
};
student.grade = "A";
student.age = 21;
console.log(`Thông tin sinh viên: Tên: ${student.name}, Tuổi: ${student.age}, Lớp: ${student.grade}`);
//Cách 2
// const student = { 
//     name: "ThuyTien", 
//     age: 20 
// };
// function updateStudent(st, newAge, grade) {
//   st.age = newAge;
//   st.grade = grade;
// }
// updateStudent(student, 21, "A");
// console.log(student);

//ex3
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};
const emailTemplate = `Xin chào ${user.firstName} ${user.lastName}, bạn đã mua sản phẩm ${user.product} với giá ${user.price} vào ngày ${user.orderDate}!`; 
console.log(emailTemplate);

//ex4
// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

const finalPrice = product.price * (1 - product.discount / 100);

const productCard = `<div class="product-card">
  <h2>${product.name}</h2>
  <p>Giá: ${product.price.toLocaleString()}VNĐ</p>
  <p>Giảm giá: ${product.discount}%</p>
  <p>Giá sau giảm: ${finalPrice.toLocaleString()}VNĐ</p>
  <p>${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
</div>`; 

console.log(productCard);

//ex5
// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};
console.log("Diện tích:",rectangle.calculateArea());
console.log(rectangle.describe());

//ex6
// Tạo object configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`

const config = {
  // Viết code ở đây
};