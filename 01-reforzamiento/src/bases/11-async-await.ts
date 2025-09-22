import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'VZj9IQnKU8rN5cKqQnu29Fx3gX44dE4D';

// const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

//Esta funcion regresa una promesa async
const getRandomGifUrl = async (): Promise<string> => {
    //await solo funciona dentro de una funcion asincrona.
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
};

//Ambas opviones funcionan.
// getRandomGifUrl().then((url) => createImageInsideDOM(url));
getRandomGifUrl().then(createImageInsideDOM);



/*
myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        // const imageURL = data.data.images.original.url;
        const imageURL = data.images.original.url;
        createImageInsideDOM(imageURL);
    })
    .catch((err) => {
        console.log(err);
    });

    */