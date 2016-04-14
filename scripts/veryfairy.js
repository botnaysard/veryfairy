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

	$(function () {
		var $form = $('#mc-embedded-subscribe-form');
		$('#mc-embedded-subscribe').on('click', function(event) {
	    	if(event) event.preventDefault();
	    	register($form);
	  	});
	});



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

	/* END - MAILING LIST POP-UP*/

	/* START - MAILING LIST AJAX */
	function register($form) {
		$.ajax({
		    type: $form.attr('method'),
		    url: $form.attr('action'),
		    data: $form.serialize(),
		    cache       : false,
		    dataType    : 'json',
		    contentType: "application/json; charset=utf-8",
		    error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
		    success     : function(data) {
	   
				if (data.result != "success") {
					var message = data.msg.substring(4);
					$('#notification_container').html('<span class="alert">'+'ERROR: '+ message +'</span>');
				} 

				else {
					var message = data.msg;
					$('#mc_embed_signup form').html('<span class="success">'+'SUCCESS! '+ message +'</span>');
					$('#notification_container').hide();
				}
	    	}
	  	});
	}

	/* END - MAILING LIST AJAX */

	/* START CONTACT FORM POP-UP */

		$("#initiate-contact").click(function(event){
		$( "#dark-overlay" ).fadeIn( "slow", function() {
			$("#contact-us").show();
        	$("#close-contact" ).show();
        	$("#close-contact" ).click(function(){
        		$("#contact-us").hide();
        		$("#dark-overlay" ).hide();
        		$("#close-contact" ).hide();
    		});
  		});
	});	

	/* END CONTACT FORM POP-UP */

});