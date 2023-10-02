var url = "https://api.themoviedb.org/3/discover/movie?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a"
// var url = "https://api.themoviedb.org/3/discover/movie?api_key=10650d6cbf9c28b020e6d1e3a0bf8b0a&language=en-US&sort_by=primary_release_date.desc&page=1&primary_release_year=2020&with_genres=16"

fetch(url).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
   //  console.log(`Genre`,data.results[0].genre_ids)
   for (var i = 0; i < data.results.length; i++) {
    var genreIds = data.results[i].genre_ids;
    console.log(`Movie Genre` + (i + 1) + `:`, genreIds);
}

for (var i = 0; i < data.results.length; i++) {
    var movieTitles = data.results[i].original_title;
    console.log(`Movie Title` + (i + 1) + `:`, movieTitles);
}

  for (var i = 0; i < data.results.length; i++) {
    var movieRatings = data.results[i].vote_average;
    console.log(`Movie Rating` + (i + 1) + `:`, movieRatings);
}

})


// //variables & objects
// var userAnswer = [];
// var questionIndex = 0;
// let currentQuestion = 0;

// //Wizard Generator Questions. 
// let question = [
//     {
//         question: 'What are your favourite movie genres?'
//         options: ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Thriller', 'War', 'Western']
//     },
//     {
//         question: 'Do you watch foreign films?'
//         options: ['Yes', 'No']
//     },
//     {
//         question: 'Do you prefer animated or live-action films?'
//         options: ['Animated', 'Live-Action']
//     },
//     {
//         question: 'Which are your favourite actors?'
//         options: ['Brad Pitt', 'Adam Sandler', 'Leonardo DiCaprio', 'Leonardo DiCaprio', 'Samuel L.Jackson', 'Chris Hemsworth', 'Dwayne Johnson']
//     },
//     {
//         question: 'Which are your favourite actresses?'
//         options: ['Scarlett Johansson', 'Jennifer Lawrence', 'Meryl Streep', 'Viola Davis', 'Amy Adams', 'Emma Stone']
//     },
//     {
//         question: 'Based on below rating system, describe your mood today.'
//         options: ['']
//     }
// ];

// //function to display the question
// function showQuestion(questionIndex) {
//     var questionContainer = document.getElementById('question-container');
//     var optionsContainer = document.getElementById('options-container');

//     //Display question
//     questionContainer.innerHTML = questions[questionIndex].question;

//     //Display options
//     optionsContainer.innerHTML = '';
//     for (var i = 0; i < questions[questionIndex].options.length; i++) {
//         var option = document.createElement('button');
//         option.innerHTML = questions[questionIndex].options[i];
//         option.addEventListener('click', handleOptionClick);
//         optionsContainer.appendChild(option);
//     }
// }
// // Event handler for option click
// function handleOptionClick(event) {
//     var selectedOption = event.target.innerHTML;
//     userAnswers.push(selectedOption);

//     // Move to the next question or show the final result
//     questionIndex++;
//     if (questionIndex < questions.length) {
//         showQuestion(questionIndex);
//     } else {
//         displayUserAnswers();
//     }
// }

// // Function to display user answers
// function displayUserAnswers() {
//     var resultContainer = document.getElementById('result-container');
//     resultContainer.innerHTML = 'User Answers: ' + userAnswers.join(', ');
// }

// // Initialize by showing the first question
// showQuestion(questionIndex);