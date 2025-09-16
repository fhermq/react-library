
const myArray:number[] = [1,2,3,4,5,6];

// const myArray2 = [...myArray];
const myArray2 = structuredClone(myArray);


myArray.push(20);

// for(const myNumber of myArray){
//     console.log(myNumber+10);
// }

console.log({myArray, myArray2});
