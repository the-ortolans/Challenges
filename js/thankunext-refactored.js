

window.onload = function() {
    var box = document.getElementById("box");

    var position = 0;

    var questions = [
        'Should you date him? <br><em>Press \'yes\' to sort through your confusion!</em>',
        'Is he *KIND* to everyone (you, family, friends, strangers, children, dogs, waiters, really-truly-everyone!)?',
        'Is he *available* (not currently in a relationship or otherwise committed)?',
        'Is he *emotionally available* (not hung up on anyone or anything else)?',
        'Is he good at communicating, and keeping the line(s) actively open to you?',
        'Does he know what he wants/needs from a relationship (and articulates them to you)?',
        'Do you want those same things as he does (i.e. casual dating, committed monogamy, polyamory, etc)?',
        'Does he have a job and/or skill-set(s) valuable to late-stage capitalism (bonus points for relevancy in post-capitalist society)?',
        'Does he have a good work ethic (can he figure things out, and get things done)?',
        'Does he have follow-through (does what he says / his actions speak louder than words)?',
        'Does he make time, effort(!!!), and space for you in his life?',
        'Does he make you laugh?',
        'Does he value the same things you do?',
    ];

    document.getElementById("yes").onclick = function() {
        position++;
        document.getElementById('questions')
            .innerHTML = questions[position];
        box.style.backgroundImage = 'url("img/yes.jpg")';
    };


    document.getElementById("no").onclick = function disableYesButton() {
        document.getElementById('questions')
            .innerHTML = "THANK U, NEXT!";
        box.style.backgroundImage = 'url("img/nope.jpg")';
        document.getElementById("yes").disabled = true;
        document.getElementById("no").disabled = false;
    };




    document.getElementById('questions')
        .innerHTML = questions[position];

};



