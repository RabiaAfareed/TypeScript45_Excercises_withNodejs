function show_magician(Magicians: string[]){
    Magicians.forEach(name => console.log(name));
}

//function to make magicians great through.map it will midify array
function make_great(magicians: string[]){
   return  magicians.map(name => ` The Great ${name}`);
}
//define an array of magicians names
let Magicians_name = [ "Harry potter", "Hamza", "usman"]

//call make great function to modify magicians names
let great_magicians = make_great(Magicians_name);
console.log(great_magicians)

//caal show magician fuction that show modified list of magicians
show_magician(great_magicians);