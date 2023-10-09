var tokenAuth =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY1MGQ2Y2JmOWMyOGIwMjBlNmQxZTNhMGJmOGIwYSIsInN1YiI6IjY1MTYwNmJmMDQ5OWYyMDBjNDRmMDA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PqZrJd3GjkOHwgflqWPOSyMjZZck7e0HJ-B8cn_3rP4";
//var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a"; //TMDB API key
var apiKey =
    "10650d6cbf9c28b020e6d1e3a0bf8b0a&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16"; //TMDB API key
var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key="; //TMDB url
// var url = "https://api.themoviedb.org/3/discover/movie?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16"
var selectedGenres = new Set(); // Set to store selected genres

var genreIds = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    "Sci-Fi": 878,
    "TV Movie": 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
};

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
    fetch(
        `https://api.themoviedb.org/3/movie/${movieIds}/credits?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a`
    )
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

function genrematch() {
    if (selectedGenres = genreIds[0]) {
        var displaygenre = document.getElementById("genre")
        displaygenre.innerHTML = Array.from(genreIds).join(",")
    }
}

// Initialize a Set to store selected genres


// Function to toggle the selection of a genre
function toggleGenreSelection(genre) {
    const genreCheckbox = document.getElementById(`genre-${genre.toLowerCase()}`);

    if (genreCheckbox.checked) {
        selectedGenres.add(genre);
    } else {
        selectedGenres.delete(genre);
    }

    // Update the display of selected genres
    updateSelectedGenresDisplay();

    // Call a function to update the listing card based on the selected genres
    updateListingCard();
}

// Update the display of selected genres
function updateSelectedGenresDisplay() {
    const genreDisplay = document.getElementById("genre");
    genreDisplay.innerHTML = ""
    genreDisplay.textContent = Array.from(selectedGenres).join(", ");

    selectedGenres.forEach(genre => {
        const genreElement = document.createElement("div");
        genreElement.textContent = genre;
        genreDisplay.appendChild(genreElement);
    });
}

fetch(baseUrl + apiKey)
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

        //Display movie titles
        displayMovieTitles(data);


        //Function to display movie titles
        function displayMovieTitles(data) {
            const movieTitleDisplay = document.getElementById("movieTitle");

            // Clear previous content
            movieTitleDisplay.innerHTML = "";

            // Display movie titles
            data.results.forEach((movie, index) => {
                const movieTitleElement = document.createElement("div");
                movieTitleElement.textContent = `Movie Title ${index + 1}: ${movie.original_title}`;
                movieTitleDisplay.appendChild(movieTitleElement);
            });
        }
    });

fetch(baseUrl + apiKey).then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data);

    // Display movie titles
    displayMovieTitles(data);

    const options = {
        method: "GET",
        rapidUrl: "https://streaming-availability.p.rapidapi.com/countries",
        headers: {
            "X-RapidAPI-Key": "f0be8384dfmshbd2f55147d628d0p15ff65jsnef1aa7c4adcf",
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
    };
// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }
