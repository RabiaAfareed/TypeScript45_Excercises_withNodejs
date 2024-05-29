function show_magician(Magicians: string[]){
    Magicians.forEach(name => console.log(name));
}

//function to make magicians great through.map it will midify array
function make_great(magicians: string[]){
   return  magicians.map(name => ` The Great ${name}`);
}
//define an array of magicians names
let Magicians_name = [ "Harry potter", "Hamza", "usman"]

//making a copy of original array through .slice function
let copy_magicians_names = Magicians_name.slice()

//modify the copy array to include" the great" with their names
let copy_great_magicians = make_great(copy_magicians_names);

//show both arrays original and copy
//original
console.log("original Array") 
show_magician(Magicians_name);

//copied
console.log("copied Array")
show_magician(copy_great_magicians);
