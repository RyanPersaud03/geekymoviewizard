// variables & objects
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
