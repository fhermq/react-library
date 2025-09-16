

function greet( name: string): string{
    return `Hola ${name}`;
}
// const greet2 = (name: string): string =>{
//         return `Hola ${name}`;
// };

//Simplificando la funcion de flecha.
const greet2 = (name: string): string => `Hola ${name}`;


const message = greet('Goku');
const message2 = greet2('Vegueta');

console.log({message, message2})


function getUser(){
    return{
        uid: 'abc-1234',
        username: 'el_usuario01',
    };
}

// const getuser2 = () => {
//      return{
//         uid: 'abc-1234',
//         username: 'el_usuario01',
//     };
// }

//Simplificando getUser2 con function arrow
const getuser2 = () => ({
        uid: 'abc-456',
        username: 'el_usuario02',
    });

const user = getUser();
const user2 = getuser2();

// console.log(user);
console.log({user,user2});


const myNumbers: number[] = [1,2,3,4,5];

// myNumbers.forEach( function(value){
//     console.log({value});
// })
//Simplificando con function arrow:

myNumbers.forEach((value) => {
    console.log({value})
});