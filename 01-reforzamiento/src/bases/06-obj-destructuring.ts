const person = {
    name: 'Tony',
    age: 40,
    key: 'Ironman'
}
//Desestructuracion
const { age: ironmanage, key, name: ironmanname } = person;

console.log({ ironmanage, key, ironmanname })

interface Hero {
    name: string,
    age: number,
    key: string;
    rank?: string;
}

const useContext = ({ name, age, key, rank = 'sin rango' }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank
    };
};

// const context = useContext(person);

//
const { rank, keyName, user: { name }, user: { age } } = useContext(person);

console.log({ rank, keyName, name, age });