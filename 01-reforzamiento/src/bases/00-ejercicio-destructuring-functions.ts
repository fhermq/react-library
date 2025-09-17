
// const setNameFunction = (value: string) => {
//     console.log(value);
// };

//Version 1
// const useState = (value: string) => {
//     return [value, setNameFunction] as const;
// };


//Version 2
const useState = (value: string) => {
    return [value, (value: string) => {
        console.log(value);
    }] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegueta');
