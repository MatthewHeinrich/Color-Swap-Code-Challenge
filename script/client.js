$(document).ready(onReady);

let count = 0;

function onReady() {
    $('#generateButton').on('click', generateColorSwap);
}

function generateColorSwap() {
    count++;
    $('.divIn').append(count);
    $('.divIn').append('<div><button>Yellow</button><button>Delete</button></div>');
}