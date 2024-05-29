let personName = "Rabia fareed";

console.log(personName.toLocaleLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g,(char) => char.toUpperCase()));