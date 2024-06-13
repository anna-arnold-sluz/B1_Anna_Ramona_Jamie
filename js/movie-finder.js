// Funktion, um die URL-Parameter auszulesen
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

document.addEventListener('DOMContentLoaded', (event) => {
    let params = getQueryParams();

    let category = params['question1'];
    let type = params['question2'];
    let medium = params['question3'];
    let language = params['question4'];

    let result = `Ein ${category} als ${type} auf ${medium} in ${language}.`;
    document.getElementById('movieRecommendation').innerText = result;
});

// Funktion zur Validierung des Formulars
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
