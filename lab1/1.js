//Ex1
function calculateBMI(weight, height) {
  const BMI = weight / (height * height);
  let result = "";
  if (BMI < 18.5) {
    result = "Thiếu cân";
  }else if (BMI >= 18.5 && BMI < 24.9) {
    result = "Bình thường";
  }else if (BMI >= 25 && BMI < 29.9) {
    result = "Thừa cân";
  }else {
    result = "Béo phì";
  }
  return `BMI: ${BMI} - Phân loại: ${result}`;
}
console.log(calculateBMI(70, 1.75));
//Ex2
function createBook(title, author, year, price) {
  const key = "calculateDiscount";
  return {
    title,
    author,
    year,
    price,
    getBookInfo() {
      return `Tên: ${this.title}, Tác giả: ${this.author},Năm: (${this.year}), Giá: ${this.price.toLocaleString()}VND`;
    },
    [key](discountPercent) {
      const discountAmount = (this.price * discountPercent) / 100;
      const finalPr = this.price - discountAmount;
      return `Giá sau giảm giả ${discountPercent}% là: ${finalPr} VND`;
    },
  };
}
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
