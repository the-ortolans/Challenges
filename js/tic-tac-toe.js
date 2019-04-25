"use strict";

$(document).ready(function(){

    // var winCombos = [
    //     [0, 1, 2],
    //     [0, 3, 6],
    //     [0, 4, 8]
    // ];

    var pressedIndex;
    var pressedElement;
    var status = $('.centeredText').filter('.status');


    $('.cell').on('click',function(){
        pressedElement = $(this);
        pressedIndex = pressedElement.data('index');
        //Check if the game is in progress
        if(isMoveValid(pressedIndex)){ // <----
            // Add the marker (O/X) to UL and array
            var marker = addMarkerToBoard(pressedIndex);
            pressedElement.find('.contentOfWell').text(marker);
            // Next player turn
            nextPlayerTurn();
            if(isWinner() === false){
                if(isMoveValid(pressedIndex)){
                    // Add the marker (O/X) to UL and array
                    var marker = addMarkerToBoard(pressedIndex);
                    pressedElement.find('.contentOfWell').text(marker);
                    // Next player turn
                    nextPlayerTurn();
                    if(turn){
                        status.text("Player 1 - X Turn")
                    } else {
                        status.text("Player 2 - O Turn");
                    }
                } else {
                    status.text("Invalid Move!");
                }
            } else {
                status.text("Game over");
            }
        }


var turn = true;
var board = [];

function nextPlayerTurn(){
        return !turn;
    }

function addMarkerToBoard(index){
    // true - player 1 is a X
    // false - player 2 is a O
    if(turn){
        board[index] = "X";
        return "X";
    } else {
        board[index] = "O";
        return "O";
    }
}

    function isMoveValid(index){
        return !board[index];
    }


function isWinner(){

    var top = board[0];
    var middle = board[3];
    var bottom = board[6];
    var winner = false;


    //1. Horizontal Rows
    if(board[1] === top && board[2] === top && top != undefined){
        winner = true;
    } else if (board[4] === middle && board[5] === middle && middle != undefined){
        winner = true;
    } else if(board[7] === bottom && board[8] === bottom && bottom != undefined){
        winner = true;
        //2. Vertical Rows
    } else if(board[3] === top && board[6] === top && top != undefined){
        winner = true;
    } else if(board[4] === board[1] && board[7] === board[1] && board[1] != undefined){
        winner = true;
    } else if(board[5] === board[2] && board[8] === board[2] && board[2]){
        winner = true;
        //3. Across
    } else if(board[4] === top && board[8] === top && top != undefined){
        winner = true;
    } else if(board[4] === board[2] && board[6] === board[2] && board[2] != undefined){
        winner = true;
    } else {
        winner = false;
    }
    return winner;
}





});