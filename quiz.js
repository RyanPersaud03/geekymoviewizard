// variables & objects
var apiKey = "10650d6cbf9c28b020e6d1e3a0bf8b0a";
var url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16`;
var userAnswers = [];
var currentQuestion = 0;

showQuestion(currentQuestion);

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
    options: ['😀', '😐', '😟']
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
  },

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


// Function to display the question
function showQuestion(questionIndex) {
  var questionArray = question[questionIndex];
  var optionsContainer = document.getElementById("options-container");

  // Set the question text
  document.getElementById("question-text").innerHTML = questionArray.question;

  // Clear previous options
  optionsContainer.innerHTML = "";

  // Display options as checkboxes for questions allowing multiple answers
  if (questionArray.multiple) {
    for (var i = 0; i < questionArray.options.length; i++) {
      var option = document.createElement("input");
      option.setAttribute("type", "checkbox");
      option.value = questionArray.options[i];
      option.id = `option-${i}`;
      optionsContainer.appendChild(option);

      var label = document.createElement("label");
      label.innerHTML = questionArray.options[i];
      label.setAttribute("for", `option-${i}`);
      optionsContainer.appendChild(label);

      optionsContainer.appendChild(document.createElement("br"));
    }
  } else {
    // Display options as buttons for single answer questions
    for (var i = 0; i < questionArray.options.length; i++) {
      var option = document.createElement("button");
      option.innerHTML = questionArray.options[i];
      option.addEventListener("click", handleOptionClick);
      optionsContainer.appendChild(option);
      optionsContainer.appendChild(document.createElement("br"));
    }
  }

  // Remove any existing Next button
  var existingNextButton = document.getElementById("next-button");
  if (existingNextButton) {
    existingNextButton.remove();
  }

  // Add Next button
  var nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.innerHTML = "Next";
  nextButton.addEventListener("click", handleNextClick);
  document.getElementById("quiz-container").appendChild(nextButton);
}

// Event handler for option click
function handleOptionClick(event) {
  var selectedOption = event.target.innerHTML;

  // If it's a multiple-choice question, store the selected options
  if (question[currentQuestion].multiple) {
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

  // Move to the next question or show the final result
  currentQuestion++;
  if (currentQuestion < question.length) {
    showQuestion(currentQuestion);
  } else {
    displayUserAnswers();
  }
}

// Function to display user answers
function displayUserAnswers() {
  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "User's answers: " + userAnswers.join(", ");
}

