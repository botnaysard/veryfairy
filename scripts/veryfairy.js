$(document).ready(function() {

	/* START - SPARKLE ON HIGHLIGHT */
	$(".sparkles-light").sparkle({
		color: ["#ffebf4", "#ffcce3", "#d6e2f5", "#adc5eb", "#ffffff"],
		count: 15,
		overlap: 10,
		speed: 1,
		minSize: 5,
		maxSize: 10,
		direction: "both"
	});
	/* END - SPARKLE ON HIGHLIGHT */

	/* START - MAILING LIST POP-UP */
	$("#join-list").click(function(event){
		$( "#dark-overlay" ).fadeIn( "slow", function() {
			$("#mc_embed_signup").show();
        	$("#close-overlay" ).show();
        	$("#close-overlay" ).click(function(){
        		$("#mc_embed_signup").hide();
        		$("#dark-overlay" ).hide();
        		$("#close-overlay" ).hide();
    		});
  		});
	});
	/* END - SPARKLE ON HIGHLIGHT */

});