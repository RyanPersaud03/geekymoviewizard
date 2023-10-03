// variables & objects
var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a";
var url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16`;

// Function to display the question
function showQuestion(questionIndex) {
  var questionArray = question[questionIndex];
  var optionsContainer = document.getElementById("options-container");

  // Set the question text
  document.getElementById("question-text").innerHTML = questionArray.question;

  // Clear previous options
  optionsContainer.innerHTML = "";

  // Display options
  for (var i = 0; i < questionArray.options.length; i++) {
    var option = document.createElement("button");
    option.innerHTML = questionArray.options[i];
    option.addEventListener("click", handleOptionClick);
    optionsContainer.appendChild(option);
  }
}

// Event handler for option click
function handleOptionClick(event) {
  var selectedOption = event.target.innerHTML;
  userAnswers.push(selectedOption);

  // Move to the next question or show the final result
  currentQuestion++;
  if (currentQuestion < question.length) {
    showQuestion(currentQuestion);
  } else {
    displayUserAnswers();
  }
}

// Wizard Generator Questions.
let question = [
  {
    question: "What are your favorite movie genres?",
    options: [
      "Action",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film-Noir",
      "History",
      "Horror",
      "Music",
      "Musical",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Thriller",
      "War",
      "Western",
    ],
    multiple: true, // Allow multiple answers
  },
  {
    question: "Do you watch foreign films?",
    options: ["Yes", "No"],
  },
  {
    question: "Do you prefer animated or live-action films?",
    options: ["Animated", "Live-Action"],
  },
  {
    question: 'Which are your favourite actors?',
    options:
      ['Adam Sandler',
        'Al Pacino',
        'Brad Pitt',
        'Chris Hemsworth',
        'Christian Bale',
        'Dwayne Johnson',
        'George Clooney',
        'Jim Carrey',
        'Leonardo DiCaprio',
        'Matt Damon',
        'Morgan Freeman',
        'Nicolas Cage',
        'Robert De Niro',
        'Samuel L.Jackson',
        'Tom Hanks'],
    multiple: true, // Allow multiple answers
  },
  {
    question: 'Which are your favourite actresses?',
    options:
      ['Amy Adams',
        'Anne Hathaway',
        'Angelina Jolie',
        'Emma Stone',
        'Jennifer Lawrence',
        'Julianne Moore',
        'Kate Winslet',
        'Meryl Streep',
        'Natalie Portman',
        'Olivia Wilde',
        'Penelope Cruz',
        'Sandra Bullock',
        'Scarlett Johansson',
        'Uma Thurman',
        'Viola Davis'],
    multiple: true, // Allow multiple answers
  },
  {
    question: 'Based on below rating system, describe your mood today.',
    options: ['😀', '😐', '😟'],
  }
];
var userAnswers = [];
var currentQuestion = 0;

// Initialize by showing the first question
window.onload = function () {
  showQuestion(currentQuestion);
};
function displayUserAnswers() {
  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "User's answers: " + userAnswers.join(", ");
};
function redirectToResultsPage() {
  window.location.href = "results.html";  // direct user to results page
};

