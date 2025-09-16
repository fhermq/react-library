const ironman = {
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
const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.address.city = 'Santa Fé';

console.log(ironman);
console.log(spiderman);