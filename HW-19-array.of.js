// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments
function arrayOf(...args){
  let newArr = [];
    for (let i in args) {
       newArr.push(args[i]);
    }
    return newArr;
}

console.log(arrayOf(15, "String", undefined, true, {name: "Ann"}));