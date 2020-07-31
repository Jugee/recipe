const arr = [23, 44, 12];

let myFunction = a => {
    console.log(`too ${a}`);
}

const arr2 = [...arr, 45, 1223];

myFunction(arr2[1]);