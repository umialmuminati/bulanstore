var current_slide = 1;
var media_screen = window.matchMedia("(max-width: 800px)")
media_screen.addListener(mediaCheck(media_screen))

function mediaCheck(media_screen) {	
	if(media_screen.matches) {
		setInterval(function() {
			$(".view-slide-image").animate({
				marginLeft : '-=30em'
			} , 1000 , function() {

				current_slide++;

				if(current_slide === $(".view-slide-image").children().length) {
					current_slide = 1;
					$(this).css("margin-left", "0px");
				}
			});
		} , 10000);
	}

	else {
		setInterval(function() {
			$(".view-slide-image").animate({
				marginLeft : '-=84.3em'
			} , 1000 , function() {

				current_slide++;
				
				if(current_slide === $(".view-slide-image").children().length) {
					current_slide = 1;
					$(this).css("margin-left", "0px");
				}
			});
		} , 10000);
	}
}