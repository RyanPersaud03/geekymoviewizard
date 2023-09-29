// Variables & objects
var userAnswers = [];
var questionIndex = 0;

// Wizard Generator Questions
var questions = [
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
  },
  {
    question: "Based on the rating system, describe your mood today.",
    options: ["Happy", "Sad", "Excited", "Relaxed"],
  },
];

// Function to display a question
function showQuestion(questionIndex) {
  var questionContainer = document.getElementById("question-container");
  var optionsContainer = document.getElementById("options-container");

  // Display the question
  questionContainer.textContent = questions[questionIndex].question;

  // Display answer options
  optionsContainer.innerHTML = "";
  for (var i = 0; i < questions[questionIndex].options.length; i++) {
    var option = document.createElement("button");
    option.textContent = questions[questionIndex].options[i];
    option.addEventListener("click", handleOptionClick);
    optionsContainer.appendChild(option);
  }
}

// Event handler for option click
function handleOptionClick(event) {
  var selectedOption = event.target.textContent;
  userAnswers.push(selectedOption);

  // Move to the next question or show the final result
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuestion(questionIndex);
  } else {
    displayUserAnswers();
  }
}

// Function to display user answers/result
function displayUserAnswers() {
  var resultContainer = document.getElementById("result-container");
  resultContainer.textContent = "User Answers: " + userAnswers.join(", ");
}

// Initialize by showing the first question
showQuestion(questionIndex);
