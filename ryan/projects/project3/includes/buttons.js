
$(document).ready(function() {
    $('.fruitbutton').click(function() {
        $('.vegetable').fadeOut('slow');
        $('.vegetablebutton').fadeOut('slow');
    });
});

$(document).ready(function() {
    $('.vegetablebutton').click(function() {
        $('.fruit').fadeOut('slow');
        $('.fruitbutton').fadeOut('slow');
    });
});

$(document).ready(function() {
    $('.allstickerbutton').click(function() {
        $('.vegetable').fadeIn('slow');
        $('.vegetablebutton').fadeIn('slow');
        $('.fruit').fadeIn('slow');
        $('.fruitbutton').fadeIn('slow');
    });
});