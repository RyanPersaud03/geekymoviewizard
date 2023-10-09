var tokenAuth =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY1MGQ2Y2JmOWMyOGIwMjBlNmQxZTNhMGJmOGIwYSIsInN1YiI6IjY1MTYwNmJmMDQ5OWYyMDBjNDRmMDA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PqZrJd3GjkOHwgflqWPOSyMjZZck7e0HJ-B8cn_3rP4";
var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a"; //TMDB API key
//var apiKey =
// "10650d6cbf9c28b020e6d1e3a0bf8b0a&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16"; //TMDB API key
var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key="; //TMDB url
// var url = "https://api.themoviedb.org/3/discover/movie?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16"
var selectedGenres = new Set(); // Set to store selected genres
let movieTitles = [];
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
  "TV-Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

/*fetch(baseUrl + apiKey)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    //console.log(data);

    // Movie Genre
    for (var i = 0; i < data.results.length; i++) {
      var genreIds = data.results[i].genre_ids;
      console.log(`Movie Genre` + (i + 1) + `:`, genreIds);
    }
    // Movie Title
    for (var i = 0; i < data.results.length; i++) {
      // movieTitles = data.results[i].original_title;
      movieTitles.push(data.results[i].original_title)
      
    }
    // Movie Rating
    for (var i = 0; i < data.results.length; i++) {
      var movieRatings = data.results[i].vote_average;
      console.log(`Movie Rating` + (i + 1) + `:`, movieRatings);
      console.log("run this first")
    }
    // Movie Rating
    for (var i = 0; i < data.results.length; i++) {
      var movieIds = data.results[i].id;
      console.log(`Movie Ids` + (i + 1) + `:`, movieIds);
      fetch(
        `https://api.themoviedb.org/3/movie/${0}/credits?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a`
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(data);
        });
    }
  });

function genrematch(){
    if (selectedGenres = genreIds[0]){
        var displaygenre = document.getElementById("genre")
        displaygenre.innerHTML = Array.from(genreIds).join(",")
    }
}*/

// Initialize a Set to store selected genres

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
//const genreDisplay = document.getElementById("selected-genres");
// genreDisplay.textContent = Array.from(selectedGenres).join(", ");

// Update the display listing with Movie titles
function updateListingCard() {
  const displayTitle = document.getElementById("movietitle");
  displayTitle.innerHTML = ""; //clear previous content
  // Remove duplicate movie titles
  const uniqueMovieTitles = Array.from(new Set(movieTitles));// Remove duplicates

  if (uniqueMovieTitles.length > 0) {
    const movieNameTile = document.createElement("p");
    movieNameTile.id = "movieName";
    displayTitle.appendChild(movieNameTile);

    const movieName = document.getElementById("movieName");
    movieName.textContent = uniqueMovieTitles.join(", ");
  }
}

//console.log(movieNames)

//movieName.textContent = movieTitles
//movieName.textContent = movieTitles

// for (var i = 0; i < data.results.length; i++) {
//   var movieTitles = data.results[i].original_title;
//   console.log(`Movie Title` + (i + 1) + `:`, movieTitles);
// }

//Update function to fetch movie titles for each genre and store in movieTitles array
function getMovieList(genre) {
  const filter = "&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=" +
    genreIds[genre];

  fetch(baseUrl + apiKey + filter)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // Filter out duplicates and only add unique movie titles
      console.log(data.results)
      //Collect titles for current genre
      const uniqueMovieTitles = data.results.map(result => result.original_title);
      movieTitles.push(...uniqueMovieTitles);
      updateListingCard(); // Update the listing card after fetching movie titles
      // for (var i = 0; i < data.results.length; i++) {
      //   // movieTitles = data.results[i].original_title;
      //   movieTitles.push(data.results[i].original_title);
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

// Function to update listing card based on the selected genres
// function updateListingCard() {
//   console.log("Selected Genres:", Array.from(selectedGenres));
// }
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
