function show_magician(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return " The Great ".concat(name); });
}
//define an array of magicians names
var Magicians_name = ["Harry potter", "Hamza", "usman"];
var great_magicians = make_great(Magicians_name);
console.log(great_magicians);
show_magician(great_magicians);
