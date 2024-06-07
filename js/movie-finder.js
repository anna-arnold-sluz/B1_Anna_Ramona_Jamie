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
