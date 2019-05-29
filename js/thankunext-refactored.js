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

    var audioInst = document.createElement('audio');
    audioInst.setAttribute('src', 'snd/thankunext-inst.mp3');

    var audioVox = document.createElement('audio');
    audioVox.setAttribute('src', 'snd/thankunext-next.mp3');

    var audioKon = document.createElement('audio');
    audioKon.setAttribute('src', 'snd/thankunext-next-expl.mp3');


    document.getElementById("yes").onclick = function () {
        position++;
        document.getElementById('questions')
            .innerHTML = questions[position];
        box.style.backgroundImage = 'url("img/yes.jpg")';
        audioInst.play();
    };


    document.getElementById("no").onclick = function disableYesButton() {
        document.getElementById('questions')
            .innerHTML = "THANK U, NEXT!";
        box.style.backgroundImage = 'url("img/nope.jpg")';
        document.getElementById("yes").disabled = true;
        document.getElementById("no").disabled = false;

        if (audioInst.play()) {
            audioInst.pause();
        }

        audioVox.play();
    };


    document.getElementById('questions')
        .innerHTML = questions[position];


    var konamiArr = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a"
    ];

    var pushArr = [];

    $(document).keyup(function (event) {

        var konamid = true;

        pushArr.push(event.key);

        if (pushArr.length > 10) {
            pushArr.shift();
        }

        for (var i = 0; i < konamiArr.length; i++) {

            if (konamiArr[i] !== pushArr[i]) {
                return konamid = false;
            }
        }

        if (konamid && pushArr.length === 10) {

            if (audioInst.play() || audioVox.play()) {
                audioInst.pause();
            }

            audioKon.play();


        }
    });


};



