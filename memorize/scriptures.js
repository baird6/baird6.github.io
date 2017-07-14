function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}
var url = "/memorize.scriptures.json"
var jason = getJSON(url);
console.log(jason);
