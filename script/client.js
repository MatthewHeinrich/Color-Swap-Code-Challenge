$(document).ready(onReady);

let count = 1; // variable for counter on P tag

function onReady() {
    $('#generateButton').on('click', generateColorSwap);
    $('.divIn').on('click', '.deleteButton', function() {
        $(this).closest('div').remove();
    })
    $('.divIn').on('click', '.colorChange', function() {
        $(this).closest('div').css({'background-color': 'yellow'})
    })
} // end onReady

function generateColorSwap() { 
    $('.divIn').append(`<div class="divOut"><p>${count++}</p><button class="colorChange">Yellow</button><button class="deleteButton">Delete</button></div>`);

} // end generateColorSwap
