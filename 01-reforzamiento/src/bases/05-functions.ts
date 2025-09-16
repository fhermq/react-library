

function greet( name: string): string{
    return `Hola ${name}`;
}

const greet2 = (name: string): string =>{
        return `Hola ${name}`;
}

const message = greet('Goku');
const message2 = greet2('Vegueta');

console.log({message, message2})


function getUser(){
    return{
        uid: 'abc-1234',
        username: 'el_usuario01',
    };
}

const getuser2 = () => {
     return{
        uid: 'abc-1234',
        username: 'el_usuario01',
    };
}

const user = getUser();
const user2 = getuser2();

// console.log(user);
console.log({user,user2});
