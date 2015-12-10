$(document).ready(function() {
	setInterval(function() {
    $('#mouth').effect('pulsate','slow')
    }, 1000);

	$(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#rabbit').animate({left: "-=30px"},'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('#rabbit').animate({top:"-=30px"},'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('#rabbit').animate({left:"+=30px"},'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('#rabbit').animate({top:"+=30px"},'fast');
				break;
		}
	});
});