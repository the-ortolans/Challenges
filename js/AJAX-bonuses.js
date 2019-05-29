"use strict";


    function jokesHtml(jokes) {

        var html = '';

        jokes.forEach(function(joke) {
            html += '<div class="questions mx-auto" id="questions">';
            html += '<h1>' + joke.quote + '</h1>';
            html += '</div>';
        });

        return html;
    }

            $.ajax('http://quotes.stormconsultancy.co.uk/random.json').done(function (jokes) {
                console.log(jokes.quote);
                // $('#questions').html(jokesHtml(jokes));
            }).fail(function () {
                console.log("ERROR!");
            });



