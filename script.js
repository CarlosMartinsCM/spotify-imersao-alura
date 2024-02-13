const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url) 
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

// Declaramos o parâmetro como result, que o resultado da request do json
// ou seja o artista encontrado na request.
function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    // Aqui pegamos o nome do artista
    const artistName = document.getElementById("artist-name");
    // Aqui pegamos a imagem do artista
    const artistImage = document.getElementById("artist-img");
    // Aqui pegamos o genero do artista
    const artistGenre = document.getElementById("artist-genre");

    result.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
        artistGenre.innerText = element.genre;
    });

    resultsArtist.classList.remove("hidden");
} 

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === "") {
        resultsArtist.classList.add("hidden");
        resultPlaylist.classList.remove("hidden");
        return;
    }
    requestApi(searchTerm);
});








