"use strict";


window.onload = function () {

    var box = document.getElementById("box");

    var position = 0;

    var questions = [
        'Should you date him? <br><em>Press \'yes\' to sort through your confusion!</em>',
        'Is he *KIND* to everyone (YOU, family, friends, strangers, children, dogs, waiters, <em>really-truly-everyone!</em>)?',
        'Is he *available* (not currently in a relationship or otherwise committed)?',
        'Is he *emotionally available* (not hung up on anyone or anything else)?',
        'Is he good at communicating with you?',
        'Does he make you laugh?',
        'Does he know what he wants/needs from a relationship (i.e. casual dating, committed monogamy, polyamory, etc)?',
        'Do you want those same things?',
        'Does he have a job and/or skill-set(s) valuable to late-stage capitalism (bonus points for relevancy in event of apocalypse)?',
        'Does he have a good work ethic (can he figure things out, and does he get things done)?',
        'Does he have follow-through (does what he says / his actions speak louder than words)?',
        'Does he make time, effort(!!!), and space for you in his life?',
        'Does he value similar "big" things as you do (i.e. religion, ethics, family, volunteering, optimism, dancing, learning new things, adventures, etc?)',
        'Does he have a solid group of close friends?',
        'Does he have healthy habits (i.e. doesn\'t drink too much, takes care of himself, etc)?',
        'Does he like to have fun?',
        ''
    ];

    document.getElementById("yes").onclick = function () {
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



