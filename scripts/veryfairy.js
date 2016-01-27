$(document).ready(function() {

	/* sparkling menu items */
	/* NOTE: add some code that will adjust the number of sparkles based onthe width of the element */

	$('.sparkles-light').sparkle({
		color: ["#ffebf4", "#ffcce3", "#d6e2f5", "#adc5eb", "#ffffff"],
		count: 15,
		overlap: 10,
		speed: 1,
		minSize: 5,
		maxSize: 10,
		direction: "both"
	});

});