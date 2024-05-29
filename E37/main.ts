//creating a function
function make_shirt (size: string = "large", printMessage: string = "I Love TypeScript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
//calling a function with by default values
make_shirt();

//calling a function now with medium size a default message
make_shirt("medium")

//calling a function now with small size and different print message
make_shirt("Small", "I Love JavaScript");