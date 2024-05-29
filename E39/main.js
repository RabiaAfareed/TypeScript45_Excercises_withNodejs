//creating a functin with parameters which return a values in string
function city_country(city, country) {
    return " ".concat(city, " , ").concat(country);
}
//calling a function in print the return value
city_country("Karachi", "pakistan");
console.log(city_country("Karachi", "pakistan"));
city_country("Tokyo", "Japan");
console.log(city_country("Tokyo", "Japan"));
city_country("Berlin", "Germany");
console.log(city_country("Berlin", "Germany"));
