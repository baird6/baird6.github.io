var url = "/scriptures.json"
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}

function loader(page) {
getJSON(url).then(function (data) {
    console.log(data);
    console.log(page);
    if (page == undefined){
        document.getElementById('stixQuote').innerHTML = data.intro[1].text; document.getElementById('quoteAttribution').innerHTML = "- " + data.intro[1].reference;
    }
    else {
        if (page == 'Dad') {
            var info = data.Dad;
            document.getElementById('stixQuote').innerHTML = data.intro[3].text; document.getElementById('quoteAttribution').innerHTML = "- " + data.intro[3].reference;
            document.getElementById('banner').style.backgroundImage = "url('images/dawn-nature-sunset-trees.jpg')";
            document.getElementById('banner').style.backgroundSize = "cover";

        }
        else if (page == 'Hannah') {
            var info = data.Hannah;

            document.getElementById('stixQuote').innerHTML = data.intro[4].text; document.getElementById('quoteAttribution').innerHTML = "- " + data.intro[4].reference;
        }
        else if (page == 'Mattie') {
            var info = data.Mattie;

            var quote = document.getElementById('stixQuote');
            quote.innerHTML = data.intro[2].text;
            var attribution = document.getElementById('quoteAttribution');
            attribution.innerHTML = "- " + data.intro[2].reference;

            quote.style.fontSize = "smaller";
            attribution.style.fontSize = "smaller";

        }
        else if (page == 'Caleb') {
            var info = data.Caleb;

            document.getElementById('stixQuote').innerHTML = data.intro[0].text; document.getElementById('quoteAttribution').innerHTML = "- " + data.intro[0].reference;
        }
        //displaying scriptures
        for (var i=1; i <= 10; i++) {
            document.getElementById('reference' + i).innerHTML = info[i-1].reference;
            document.getElementById('text' + i).innerHTML = info[i-1].text;
            document.getElementById('date' + i).innerHTML = info[i-1].date;

            var listItem = document.createElement('li');
            var anchor = document.createElement('a');
            listItem.appendChild(anchor);
            anchor.setAttribute('href', '#scripture' + i);
            anchor.innerHTML = info[i-1].date;
            document.getElementById('quickNav').appendChild(listItem);
        }
        document.title = page + " " + document.title;

    }




})
}
