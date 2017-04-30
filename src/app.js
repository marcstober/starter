import $ from 'jquery';

$(() => {
    let $main = $('#main');

    $main.fadeOut().fadeIn();

    $('#info').html(`${$main.width()} &times; ${$main.height()}`);
});


