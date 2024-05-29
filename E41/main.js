//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define in an array containing magicians name
var magicians_name = ["Harry potter", "Hamza", "usman"];
//call the function to print each magician name
show_magicians(magicians_name);
