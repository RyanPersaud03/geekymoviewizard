
// variables & objects


var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a";
var url = "https://api.themoviedb.org/3/discover/movie?q=${apiKey}";
var url = "https://api.themoviedb.org/3/discover/movie?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16";

fetch(url).then(function (res) {
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
})


//variables & objects

var userAnswers = [];
var currentQuestion = 0;

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
    question: "Which are your favorite actors?",
    options: [
      "Brad Pitt",
      "Adam Sandler",
      "Leonardo DiCaprio",
      "Samuel L. Jackson",
      "Chris Hemsworth",
      "Dwayne Johnson",
    ],
    multiple: true, // Allow multiple answers
  },
  {
    question: "Which are your favorite actresses?",
    options: [
      "Scarlett Johansson",
      "Jennifer Lawrence",
      "Meryl Streep",
      "Viola Davis",
      "Amy Adams",
      "Emma Stone",
    ],
    multiple: true, // Allow multiple answers
  },
  {
    question: "Based on below rating system, describe your mood today.",
    options: ["😃", "😊", "😐", "😔", "😢"],
  },
];

// Function to display the question
function showQuestion(questionIndex) {
  var questionContainer = document.getElementById("question-text");
  var optionsContainer = document.getElementById("options-container");

  // Set the question text
  questionContainer.innerHTML = question[questionIndex].question;

  // Clear previous options
  optionsContainer.innerHTML = "";

  // Display options
  for (var i = 0; i < question[questionIndex].options.length; i++) {
    var option = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = question[questionIndex].options[i];
    checkbox.name = "answer";
    option.appendChild(checkbox);
    option.appendChild(
      document.createTextNode(question[questionIndex].options[i])
    );
    optionsContainer.appendChild(option);
  }

  // Hide or show the "Next" button based on the current question
  var nextButton = document.getElementById("next-button");
  if (questionIndex === question.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

// Event handler for the "Next" button click
function handleNextButtonClick() {
  // Get all selected options for the current question
  var selectedOptions = document.querySelectorAll(
    'input[name="answer"]:checked'
  );

  // Extract the values of selected options
  var selectedValues = [];
  selectedOptions.forEach(function (option) {
    selectedValues.push(option.value);
  });

  // Store the selected values in userAnswers
  userAnswers[currentQuestion] = selectedValues;

  // Move to the next question
  currentQuestion++;

  // Display the next question or user answers
  if (currentQuestion < question.length) {
    showQuestion(currentQuestion);
  } else {
    displayUserAnswers();
  }
}

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
                'Tom Hanks']
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
                'Viola Davis']
    },
  },
    {
        question: 'Based on below rating system, describe your mood today.',
        options: ['😀', '😐', '😟']
    }.
];

// Function to display the question
function showQuestion(questionIndex) {
  var questionContainer = document.getElementById("question-container");
  var optionsContainer = document.getElementById("options-container");

  // Set the question text
  questionContainer.innerHTML = question[questionIndex].question;

  // Clear previous options
  optionsContainer.innerHTML = "";

  // Display options
  for (var i = 0; i < question[questionIndex].options.length; i++) {
    var option = document.createElement("button");
    option.innerHTML = question[questionIndex].options[i];
    option.addEventListener("click", handleOptionClick);
    optionsContainer.appendChild(option);
  }
}

// Event handler for option click
function handleOptionClick(event) {
  var selectedOption = event.target.innerHTML;
  userAnswers.push(selectedOption);

  // Move to the next question or show the final result
  questionIndex++;
  if (questionIndex < question.length) {
    showQuestion(questionIndex);
  } else {
    displayUserAnswers();
  }


  // Function to display user answers
function displayUserAnswers() {
  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "User Answers: ";
  userAnswers.forEach(function (answers, index) {
    resultContainer.innerHTML +=
      "<br>Question " + (index + 1) + ": " + answers.join(", ");
  });
}

// Add an event listener to the "Next" button
var nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", handleNextButtonClick);

// Initialize by showing the first question
showQuestion(currentQuestion);
