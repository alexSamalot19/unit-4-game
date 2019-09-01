
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

	$(".crystals").empty();

	var images = [

            "assets/images/Green.jpg",
            "assets/images/Blue.jpg",
            "assets/images/Red.jpg",
            "assets/images/Purple.jpg"];
		
	random_result = Math.floor(Math.random() * (120-19) ) + 19; 


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * (12-1)) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
                // "background-image": url(images[i]),
                
				"background-image": "url('" + images[i] + "')",
				"background-size":"cover"

			});
            console.log(images[i])

		$(".crystals").append(crystal);

	}

	$("#previous").html("Click a Crystal to Start!!!");

}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});




