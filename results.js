var tokenAuth = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY1MGQ2Y2JmOWMyOGIwMjBlNmQxZTNhMGJmOGIwYSIsInN1YiI6IjY1MTYwNmJmMDQ5OWYyMDBjNDRmMDA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PqZrJd3GjkOHwgflqWPOSyMjZZck7e0HJ-B8cn_3rP4"
//var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a"; //TMDB API key
var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16"; //TMDB API key
var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key="; //TMDB url
// var url = "https://api.themoviedb.org/3/discover/movie?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16"

var genreIds = {
    "Action": 28,
    "Adventure": 12,
    "Animation": 16,
    "Comedy": 35,
    "Crime": 80,
    "Documentary": 99,
    "Drama": 18,
    "Family": 10751,
    "Fantasy": 14,
    "History": 36,
    "Horror": 27,
    "Music": 10402,
    "Mystery": 9648,
    "Romance": 10749,
    "Sci-Fi": 878,
    "TV Movie": 10770,
    "Thriller": 53,
    "War": 10752,
    "Western": 37,
}

mobiscroll.select('#multiple-select', {
    inputElement: document.getElementById("genreDropdownContent"),
    touchUi: false
});

fetch(baseUrl + apiKey).then(function (res) {
    return res.json()
}).then(function (data) {
    console.log(data)

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
    // Movie Rating
    for (var i = 0; i < data.results.length; i++) {
        var movieIds = data.results[i].id;
        console.log(`Movie Ids` + (i + 1) + `:`, movieIds);
        fetch(`https://api.themoviedb.org/3/movie/${movieIds}/credits?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a`)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
            });
    }

});

// Display Genre
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
// Display Movies
function displayMovies(movies) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";
    // Display Mvoie
    movies.forEach((movie) => {
        const li = document.createElement("li");
        li.textContent = movie.title;
        movieList.appendChild(li);
    });
}

const options = {
    method: 'GET',
    rapidUrl: "https://streaming-availability.p.rapidapi.com/countries",
    headers: {
        'X-RapidAPI-Key': 'f0be8384dfmshbd2f55147d628d0p15ff65jsnef1aa7c4adcf',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
};
// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }