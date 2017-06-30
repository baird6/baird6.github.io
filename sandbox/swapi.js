
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}

function fetchShips() {
    var url = "//swapi.co/api/starships/";
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);
        var results = data.results;

        var shipListElement = document.getElementById('shipList');

        shipListElement.innerHTML = " ";

        results.forEach(function(ship) {

            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.setAttribute('href', ship.url);
            link.innerHTML = ship.name;

            listItem.appendChild(link);
            shipListElement.appendChild(listItem);
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var information = document.getElementById('moreInfo')
                information.style.display = 'block';
                document.getElementById('name').innerHTML = ship.name; document.getElementById('model').innerHTML = ship.model; document.getElementById('class').innerHTML = ship.starship_class;
                document.getElementById('cargo').innerHTML = ship.cargo_capacity;

            })

        })

    });
}
// Collaborated with: Sam Daw
fetchShips();
