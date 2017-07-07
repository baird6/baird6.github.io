function ajaxLoad(location) {

}
(function init() {
    var franklin = document.getElementById('franklinLink');
    var greenville = document.getElementById('greenvilleLink');
    var springfield = document.getElementById('springfieldLink');
    franklin.addEventListener('click',function(event){
        event.preventDefault();
        ajaxFromLocalJson('Franklin');

     greenville.addEventListener('click',function(event){
         event.preventDefault();
         ajaxFromLocalJson('Franklin');

    springfield.addEventListener('click',function(event){
         event.preventDefault();
         ajaxFromLocalJson('Franklin')
    });
}) ();

function requestFromLocalJson(locationToGrab) {
    getJSON("/weather/weather.json").then(function (data) {
        console.log(data);
        var location = data[locationToGrab]['City'];
        var state = data[locationToGrab]['State'];
        var tempF = data[locationToGrab]['High'];
    })
}


fucntion getJSON(url) {
   return fetch(url)
    .then(function )
}
function getInfo(url) {
    getJSON(url).then(function (data) {
       var franklin = data.Franklin;

        document.getElementById('location').innerHTML = franklin.City;

        document.getElementById('temperature').innerHTML = franklin.High;
    });

}
var url = "//weather/weather.json"
getInfo(url);
