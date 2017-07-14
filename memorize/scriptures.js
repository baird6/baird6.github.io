var url = "/memorize/scriptures.json"
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
    if (page == 'dad') {
        var info = data.Dad;

        document.getElementById('stixQuote').innerHTML = data.intro[3].text; document.getElementById('quoteAttribution').innerHTML = "- " + data.intro[3].reference;
    }
    else if (page == 'hannah') {
        var info = data.Hannah;

        document.getElementById('stixQuote').innerHTML = data.intro[4].text; document.getElementById('quoteAttribution').innerHTML = "- " + data.intro[4].reference;
    }
    else if (page == 'mattie') {
        var info = data.Mattie;

        var quote = document.getElementById('stixQuote');
        quote.innerHTML = data.intro[2].text;
        var attribution = document.getElementById('quoteAttribution');
        attribution.innerHTML = "- " + data.intro[2].reference;

        quote.style.fontSize = "smaller";
        attribution.style.fontSize = "smaller";

    }
    else if (page == 'caleb') {
        var info = data.Caleb;

        document.getElementById('stixQuote').innerHTML = data.intro[0].text; document.getElementById('quoteAttribution').innerHTML = "- " + data.intro[0].reference;
    }
    else {
        document.getElementById('stixQuote').innerHTML = data.intro[1].text; document.getElementById('quoteAttribution').innerHTML = "- " + data.intro[1].reference;
    }

    //displaying scriptures
    for (var i=1; i <= 10; i++) {
        document.getElementById('reference' + i).innerHTML = info[i-1].reference;
        document.getElementById('text' + i).innerHTML = info[i-1].text;

    }




})
}
