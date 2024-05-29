//define variables
let apple ="apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits =["apple","banan","orange"];

//test for equality and uniquality with strings

console.log("is apple is equal to apple?");
console.log(apple =="apple");

console.log("is apple is not equal to apple?");
console.log(apple != apple);

//tests using  lower case function
console.log("is APPLE is equal to apple after converting to lower case");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log(uppercaseApple.toLocaleLowerCase() != "apple");

//numerical testes
console.log("is ten is equals to twenty?");
console.log(ten == twenty);

//not equals to
console.log("\nis ten is not equal to twenty?");
console.log(ten != twenty);

//greater or not greater
console.log("\nis ten is greater than 0");
console.log(ten > 0);

//less than
console.log("\nis twenty is less than 10");
console.log(twenty < ten);

//greater than or equal to
console.log("\nis ten is greater than or equal to five");
console.log(ten >= 5);

//less than or equals to
console.log("\nis twenty is less than or equals to 10");
console.log(twenty <= 10);

//using &&  operator
console.log("\n tweenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty >10);

console.log("\n tweenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty >30);

//using || or operator
console.log("\n twenty is grater than 50 and 20 is equal to 20");
console.log(20 >50 || 20 == 20);

console.log("\n twenty is grater than 50 and 20 is not equal to 20");
console.log(20 >50 || 20 != 20);

//test weather and item is include in array
console.log("\n is orange include in my fruits array");
console.log(fruits.includes("orange"));
//not include
console.log("is not include in my fruits array");
console.log(!fruits.includes("orange"));
