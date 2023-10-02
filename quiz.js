//variables & objects
var userAnswers = [];
var questionIndex = 0;
let currentQuestion = 0;

//Wizard Generator Questions.
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
    question: "Based on below rating system, describe your mood today.",
    options: ["😃", "😊", "😐", "😔", "😢"],
  },
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
}

// Function to display user answers
function displayUserAnswers() {
  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "User Answers: " + userAnswers.join(", ");
}

// Initialize by showing the first question
showQuestion(questionIndex);
