import { heroes, type Hero, type Owner } from "../data/heroes.data"


// const myArray:number[] = [1,2,3,4,5,6];

export const getHeroesByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter(hero => hero.owner === owner);
    return heroesByOwner;
};