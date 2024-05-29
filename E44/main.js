//define a function with a rest parameter that accept items arrguments reprsenting our sandwitch
function make_sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwitch with a following items:");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("now enjoy sandwitch");
}
//call the function 3 times with 3 different number of argument
make_sandwitch("Chicken", "Cheese", "Mayo", "Egg");
make_sandwitch("Bread", "Butter");
make_sandwitch("Bred", "butter", "Mayo", "Cheese", "chicken", "egg");
