// variables & objects
var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a";
var url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16`;
var userAnswers = [];
var currentQuestion = 0;
var selectedOption = null;

// Wizard Generator Questions.
let questions = [
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
    options: ['😀', '😐', '😟']
  },
];

// Add Next button
var nextButton = document.createElement("button");
nextButton.id = "next-button";
nextButton.innerHTML = "Next";
nextButton.addEventListener("click", function () {
  handleNextClick(currentQuestion);
});
document.getElementById("quiz-container").appendChild(nextButton);
// Call showQuestion for the first question
showQuestion(currentQuestion);

// Function to display the question
function showQuestion(currentQuestion) {
  var questionContainer = document.getElementById("question-text");
  var optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = ""; // Clear previous options

  // Set the question text
  questionContainer.innerText = questions[currentQuestion].question;

  // Display options
  var options = questions[currentQuestion].options;
  for (var i = 0; i < options.length; i++) {
    var optionElement;

    if (questions[currentQuestion].multiple) {
      // Display as checkboxes for multiple-choice questions
      optionElement = document.createElement("input");
      optionElement.type = "checkbox";
      optionElement.value = options[i];
      optionElement.id = "option-" + i;
    } else {
      // Display as radio buttons for single-choice questions
      optionElement = document.createElement("input");
      optionElement.type = "radio";
      optionElement.value = options[i];
      optionElement.name = "option";
      optionElement.id = "option-" + i;
    }
    var labelElement = document.createElement("label");
    labelElement.innerHTML = options[i];
    labelElement.setAttribute("for", "option-" + i);

    optionsContainer.appendChild(optionElement);
    optionsContainer.appendChild(labelElement);
    optionsContainer.appendChild(document.createElement("br"));
  }
}

// Event handler for next click
function handleNextClick() {
  var selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  selectedOption = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
  userAnswers[currentQuestion] = selectedOption;

  if (questions[currentQuestion].multiple) {
    // Handle multiple-choice questions
    var selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    selectedOption = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
    userAnswers[currentQuestion] = selectedOption;
  } else {
    // Handle single-choice questions
    var selectedRadio = document.querySelector('input[type="radio"]:checked');
    if (selectedRadio) {
      selectedOption = selectedRadio.value;
      userAnswers[currentQuestion] = selectedOption;
    }
  }
  currentQuestion++;
  //Check if there are more questions
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    displayUserAnswers();
  }
}

// If it's a multiple-choice question, store the selected options
if (questions[currentQuestion].multiple) {
  // Check if the option is already selected, if so, remove it
  var index = userAnswers.indexOf(selectedOption);
  if (index !== -1) {
    userAnswers.splice(index, 1);
  } else {
    userAnswers.push(selectedOption);
  }
} else {
  // For single-choice questions, store the selected option
  userAnswers[currentQuestion] = selectedOption;
}

//Function to display user answers
function displayUserAnswers() {
  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "User's answers: " + userAnswers.join(", ");
}
function redirectToResultsPage() {
  window.location.href = "results.html";
}
