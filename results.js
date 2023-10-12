var tokenAuth =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY1MGQ2Y2JmOWMyOGIwMjBlNmQxZTNhMGJmOGIwYSIsInN1YiI6IjY1MTYwNmJmMDQ5OWYyMDBjNDRmMDA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PqZrJd3GjkOHwgflqWPOSyMjZZck7e0HJ-B8cn_3rP4";
var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a"; //TMDB API key
var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key="; //TMDB url
let movieTitles = [];
let moviesByGenre = {};
let genreIdsByTitle = {}; //Store genre information for each title
let selectedGenres = new Set(); //SelectedGenres is a global variable
let includeForeign = true; // Assume default is to include foreign movies

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

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve user answers from local storage
  const userAnswersString = localStorage.getItem('userAnswers');
  if (userAnswersString) {
    const userAnswers = JSON.parse(userAnswersString);

    // Extract selected genres and actors from user answers

    const selectedGenresFromUser = userAnswers[0];

    // Display selected genres and actors
    updateSelectedGenresDisplay(selectedGenresFromUser);

    // Fetch movies based on selected genres
    getMovieList(selectedGenresFromUser);

    const selectedGenres = userAnswers[0];

    // Display selected genres and actors
    updateSelectedGenresDisplay(selectedGenres);

    // Fetch movies based on selected genres
    getMovieList(selectedGenres);

  }
});

// Update the display of selected genres
function updateSelectedGenresDisplay(selectedGenres) {
  const genreDisplay = document.getElementById("genre");
  genreDisplay.innerHTML = "";
  genreDisplay.textContent = Array.from(selectedGenres).join(", ");

  selectedGenres.forEach(genre => {
    const genreElement = document.createElement("div");
    genreElement.textContent = genre; //Display genre name instead of IDs
    genreDisplay.appendChild(genreElement);
  });
}

// Update the display listing with Movie titles
function updateListingCard() {
  const displayTitle = document.getElementById("movieTitle");
  displayTitle.innerHTML = ""; //clear previous content

  // // Group movie titles by genre
  // const moviesByGenre = {};

  // Display movie titles by genre
  for (const genre in moviesByGenre) {
    const genreTitle = document.createElement("h3");
    genreTitle.textContent = genre;
    displayTitle.appendChild(genreTitle);

    const movieList = document.createElement("ul");
    for (const title of moviesByGenre[genre]) {
      const movieItem = document.createElement("li");
      movieItem.textContent = title;
      movieList.appendChild(movieItem);
    }
    displayTitle.appendChild(movieList);
  }
}

// Function to toggle the selection of a genre
function toggleGenreSelection(genre) {
  const genreCheckbox = document.getElementById(`genre-${genre.toLowerCase()}`);

  if (genreCheckbox.checked) {
    selectedGenres.add(genre);
  } else {
    selectedGenres.delete(genre);
  }

  // Clear movie titles array and update listing card
  movieTitles = [];
  updateListingCard();

  //Fetch movie titles for selected genres
  const userAnswersString = localStorage.getItem('userAnswers');
  if (userAnswersString) {
    const userAnswers = JSON.parse(userAnswersString);
    includeForeign = userAnswers[1] === 'yes'; // User's preference for foreign movies is stored at index 1
  }
  for (const genre of selectedGenres) {
    getMovieList(genre);
  }
}
//Update function to fetch movie titles for each genre and store in movieTitles array
function getMovieList(genre) {
  const filter = "&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=" +
    genreIds[genre];

  //Exclude foreign movies if the user does not want to see them
  if (!includeForeign) {
    filter += "&language=en-US&with_original_language=en";
  }

  fetch(baseUrl + apiKey + filter)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // Filter out duplicates and only add unique movie titles
      console.log(data.results)
      //Collect titles for current genre
      uniqueMovieTitles = data.results.map(result => result.original_title);
      // Store genre information for each title
      for (const title of uniqueMovieTitles) {
        if (!genreIdsByTitle[title]) {
          genreIdsByTitle[title] = [];
        }
        genreIdsByTitle[title].push(genre);

        // Update moviesByGenre object
        if (!moviesByGenre[genre]) {
          moviesByGenre[genre] = [];
        }
        moviesByGenre[genre].push(title);
      }
      movieTitles.push(...uniqueMovieTitles);
      updateListingCard(); // Update the listing card after fetching movie titles
    });
}

// Function to toggle the selection of a genre
function toggleGenreSelection(genre) {
  const genreCheckbox = document.getElementById(`genre-${genre.toLowerCase()}`);

  if (genreCheckbox.checked) {
    selectedGenres.add(genre);
  } else {
    selectedGenres.delete(genre);
  }

  // Clear movie titles array and update listing card
  movieTitles = [];
  updateListingCard();

  //Fetch movie titles for selected genres
  for (const genre of selectedGenres) {
    getMovieList(genre);
  }
}
