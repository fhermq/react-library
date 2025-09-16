interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Adress;
}

interface Adress {
        postalCode: string,
        city: string,
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address:{
        postalCode: 'ABC123',
        city: 'Mew York',
    }
};


//Operador spread 
//const spiderman = { ...ironman };

console.log(ironman);