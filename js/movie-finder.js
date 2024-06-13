const movies = [{
    title: "James Bond",
    category: "Actionfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Mandarin"
 },
 {
    title: "Miss Americana",
    category: "Dokumentarfilm",
    type: "Anime",
    medium: "DVD",
    language: "Französisch"
 },
 {
    title: "Checker Tobi",
    category: "Dokumentarfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Deutsch"
 },
 {
    title: "Papa Moll",
    category: "Kinderfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Deutsch"
 },
 {
    title: "Globi",
    category: "Kinderfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Deutsch"
 },
 {
    title: "Ocean's Eleven",
    category: "Actionfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Englisch"
 },
 {
    title: "Meg",
    category: "Horrorfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Englisch"
 },
 {
    title: "Annabelle",
    category: "Horrorfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Englisch"
 },
 {
    title: "Alice im Wunderland",
    category: "Fantasyfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Englisch"
 },
 {
    title: "Rubinrot",
    category: "Fantasyfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Deutsch"
 },
 {
    title: "Frozen",
    category: "Kinderfilm",
    type: "Trickfilm",
    medium: "DVD",
    language: "Englisch"
 },
 {
    title: "Harry Potter",
    category: "Fantasyfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Englisch"
 },
 {
    title: "Fast & Furious",
    category: "Actionfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Englisch"
 },
 {
    title: "Im Reich der wilden Tiere",
    category: "Dokumentarfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Deutsch"
 },
 {
    title: "Smile",
    category: "Horrorfilm",
    type: "Realfilm",
    medium: "DVD",
    language: "Englisch"
 },
];

function getQueryParams() {
 let params = {};
 let queryString = window.location.search.substring(1);
 let regex = /([^&=]+)=([^&]*)/g;
 let m;
 while (m = regex.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
 }
 return params;
}

function findBestMatchingMovie(category, type, medium, language) {
 let movie = movies.find(movie =>
    movie.category === category &&
    movie.type === type &&
    movie.medium === medium &&
    movie.language === language
 );
 if (movie) return movie;

 movie = movies.find(movie =>
    movie.category === category &&
    movie.type === type &&
    movie.medium === medium
 );
 if (movie) return movie;

 movie = movies.find(movie =>
    movie.category === category &&
    movie.type === type
 );
 if (movie) return movie;

 movie = movies.find(movie =>
    movie.category === category
 );
 if (movie) return movie;

 return movies[0];
}

document.addEventListener('DOMContentLoaded', (event) => {
 let params = getQueryParams();

 let category = params['question1'];
 let type = params['question2'];
 let medium = params['question3'];
 let language = params['question4'];

 let movie = findBestMatchingMovie(category, type, medium, language);

 document.getElementById('movieRecommendation').innerText = `Dein perfekter Film ist: ${movie.title} als ${category}, ${type} auf ${medium} in ${language}.`;
});

function validateForm() {
 let form = document.getElementById('questionnaireForm');
 let isValid = true;

 let question1 = form.elements['question1'].value;
 let question2 = form.elements['question2'].value;
 let question3 = form.elements['question3'].value;
 let question4 = form.elements['question4'].value;

 if (!question1 || !question2 || !question3 || !question4) {
    isValid = false;
 }

 if (!isValid) {
    document.getElementById('movie-finder-error').classList.remove("hidden");
 } else {
    document.getElementById('movie-finder-error').classList.add("hidden");
 }

 return isValid;
}