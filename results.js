var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a"; //TMDB API key
const baseUrl = "https://api.themoviedb.org/3";

function getMovies() {
    const selectedGenreId = document.getElementById('genre').value;
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${selectedGenreId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
        })
        .catch(error => console.error('Error fetching movies:', error));
}

function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        movieList.appendChild(li);
    });
}




