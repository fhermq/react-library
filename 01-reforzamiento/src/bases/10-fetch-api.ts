const API_KEY = 'VZj9IQnKU8rN5cKqQnu29Fx3gX44dE4D';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
.then((response) => response.json())
.then((data)=> {
    const imageURL = data.data.images.original.url;
    console.log(imageURL);
    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    document.body.append(imageElement);
})
.catch((err)=>{
    console.log(err);
}   );