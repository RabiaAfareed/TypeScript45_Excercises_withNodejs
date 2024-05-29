//define a function with a rest parameter that accept items arrguments reprsenting our sandwitch
function make_sandwitch(...items: string[]){
    console.log("\nMaking a sandwitch with a following items:");
    items.forEach(singleItem => console.log(singleItem));

    console.log("now enjoy sandwitch");
}

//call the function 3 times with 3 different number of argument
make_sandwitch("Chicken","Cheese","Mayo","Egg");

make_sandwitch("Bread","Butter");

make_sandwitch("Bred","butter","Mayo","Cheese","chicken","egg");
