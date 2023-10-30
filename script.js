const jokeContainer = document.getElementById("joke");
const btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


btn.addEventListener('click', async() =>{
    await fetch(url).then(data => data.json())
    .then(item =>{
        jokeContainer.textContent =`${item.joke}`
    });

})