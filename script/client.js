$(document).ready(onReady);

let count = 0;

function onReady() {
    $('#generateButton').on('click', generateColorSwap);
    $('.divIn').on('click', '.deleteButton', function() {
        $(this).closest('div').remove();
    })
    $('.divIn').on('click', '.colorChange', function() {
        $(this).closest('div').css({'background-color': 'yellow'})
    })
}

function generateColorSwap() {
    count++
    $('.divIn').append('<div class="divOut"><p class="counter"></p><button class="colorChange">Yellow</button><button class="deleteButton">Delete</button></div>');
    $('.counter').append(count);
}

// function colorChanger() {
//     $(this).css({'background-color': 'yellow'});
// }