//variables & objects
var userAnswer = [];
var questionIndex = 0;
let currentQuestion = 0;

//Wizard Generator Questions. 
let question = [
    {
        question: 'What are your favourite movie genres?'
        options: ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Thriller', 'War', 'Western']
    },
    {
        question: 'Do you watch foreign films?'
        options: ['Yes', 'No']
    },
    {
        question: 'Do you prefer animated or live-action films?'
        options: ['Animated', 'Live-Action']
    },
    {
        question: 'Which are your favourite actors?'
        options: ['Brad Pitt', 'Adam Sandler', 'Leonardo DiCaprio', 'Leonardo DiCaprio', 'Samuel L.Jackson', 'Chris Hemsworth', 'Dwayne Johnson']
    },
    {
        question: 'Which are your favourite actresses?'
        options: ['Scarlett Johansson', 'Jennifer Lawrence', 'Meryl Streep', 'Viola Davis', 'Amy Adams', 'Emma Stone']
    },
    {
        question: 'Based on below rating system, describe your mood today.'
        options: ['']
    }
];

//function to display the question
function showQuestion(questionIndex) {
    var questionContainer = document.getElementById('question-container');
    var optionsContainer = document.getElementById('options-container');

    //Display question
    questionContainer.innerHTML = questions[questionIndex].question;

    //Display options
    optionsContainer.innerHTML = '';
    for (var i = 0; i < questions[questionIndex].options.length; i++) {
        var option = document.createElement('button');
        option.innerHTML = questions[questionIndex].options[i];
        option.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(option);
    }
}
// Event handler for option click
function handleOptionClick(event) {
    var selectedOption = event.target.innerHTML;
    userAnswers.push(selectedOption);

    // Move to the next question or show the final result
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion(questionIndex);
    } else {
        displayUserAnswers();
    }
}

// Function to display user answers
function displayUserAnswers() {
    var resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = 'User Answers: ' + userAnswers.join(', ');
}

// Initialize by showing the first question
showQuestion(questionIndex);