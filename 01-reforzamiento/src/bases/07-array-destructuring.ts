
const characterNames= ['Uno', 'Dos', 'Tres', 'Cuatro','Cinco','Seis'];

const [p1,,,p4,,p6] = characterNames;

console.log({p1,p4,p6});

const returnArrayFn = ()=>{
   return ['ABC',2222] as const; 
}

const [letra, numero] = returnArrayFn();

console.log(letra+1, numero+1111)