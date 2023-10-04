var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a"; //TMDB API key
const baseUrl = "https://api.themoviedb.org/3";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    // Movie Genre
    for (var i = 0; i < data.results.length; i++) {
      var genreIds = data.results[i].genre_ids;
      console.log(`Movie Genre` + (i + 1) + `:`, genreIds);
    }
    // Movie Title
    for (var i = 0; i < data.results.length; i++) {
      var movieTitles = data.results[i].original_title;
      console.log(`Movie Title` + (i + 1) + `:`, movieTitles);
    }
    // Movie Rating
    for (var i = 0; i < data.results.length; i++) {
      var movieRatings = data.results[i].vote_average;
      console.log(`Movie Rating` + (i + 1) + `:`, movieRatings);
    }
  });

fetch(
  "https://api.themoviedb.org/3/movie/550/credits?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  });

function getMovies() {
  const selectedGenreId = document.getElementById("genre").value;
  const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${selectedGenreId}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.results);
    })
    .catch((error) => console.error("Error fetching movies:", error));
}

function displayMovies(movies) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.title;
    movieList.appendChild(li);
  });
}
