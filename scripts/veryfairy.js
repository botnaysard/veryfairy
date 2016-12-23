$(document).ready(function() {
		
	/* START - SPARKLE ON HIGHLIGHT */

		/* note: modified original code to procedurally generates # of sparkles based on area of element; works for most elements */

		$(".sparkles").sparkle({
			color: ["#ffebf4", "#ffcce3", "#d6e2f5", "#adc5eb", "#ffffff"],
			overlap: 7,
			speed: 1,
			minSize: 5,
			maxSize: 10,
			direction: "both"
		}); 

		/* note: very large elements look too busy and require a reduced number of sparkles */
	
		$(".sparkles-large").sparkle({
			color: ["#ffebf4", "#ffcce3", "#d6e2f5", "#adc5eb", "#ffffff"],
			count: Math.round($(this).width() * $(this).height()) * 0.00001,
			overlap: 7,
			speed: 1,
			minSize: 5,
			maxSize: 10,
			direction: "both"
		}); 

		/* note: some elements display an anomalously large number of sparkles in Mozilla and IE only this is a temporary fix */

			$(".sparkles-exception").sparkle({
			color: ["#ffebf4", "#ffcce3", "#d6e2f5", "#adc5eb", "#ffffff"],
			count: Math.round($(this).width() * $(this).height()) * 0.000002,
			overlap: 7,
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


	$("#join-list, .join-link, .mobile-mailing").click(function(event){
		$( "#dark-overlay" ).fadeIn( "slow", function() {
			$("#mc_embed_signup").show();
        	$("#close-overlay" ).show();
        	$("#close-overlay" ).click(function(){
        		$("#mc_embed_signup").hide();
        		$("#dark-overlay" ).hide();
        		$("#close-overlay" ).hide();
    		});
    		$('body').on('keydown', function(e){
 	  	  		if(e.keyCode == 27) {
        			$("#mc_embed_signup").hide();
        			$("#dark-overlay").hide();
        			$("#close-overlay").hide();
 	  			};
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

		$("#initiate-contact, .contact-link, .bw-page-link").click(function(event){
		$( "#dark-overlay" ).fadeIn( "slow", function() {
			$("#contact-us").show();
        	$("#close-contact" ).show();
        	$("#close-contact" ).click(function(){
        		$("#contact-us").hide();
        		$("#dark-overlay" ).hide();
        		$("#close-contact" ).hide();
    		});
    		$('body').on('keydown', function(e){
 	  	  		if(e.keyCode == 27) {
        			$("#contact-us").hide();
        			$("#dark-overlay").hide();
        			$("#close-contact").hide();
 	  			};
 	  		});    		
  		});
	});	

	/* END CONTACT FORM POP-UP */

	/* START CONTACT FORM AJAX */

	$(document).ready(function() {

    $('#someForm').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#comments').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/carlie@averyfairydoor.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                comments:comments,
                _subject:'Correstpondence submitted from www.averyfairydoor.com',
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#formBlock').hide();
                $('#contact-header').hide();
                $('#thankyouBlock').show();
            }   

        });     
        
    });

}); 

	/* END CONTACT FORM AJAX */

	/* START IMAGE SLIDER FOR HEADER */

	$(".slider > div:gt(0)").hide();
		setInterval(function() { 
  			$('.slider > div:first')
    		.fadeOut(1000)
    		.next()
    		.fadeIn(1000)
    		.end()
    		.appendTo('.slider');
		},  5000);

	/* END IMAGE SLIDER FOR HEADER */

	/* START TESTIMONIAL SLIDER */

	$(".testimonials > div:gt(0)").hide();
		setInterval(function() { 
  			$('.testimonials > div:first')
    		.fadeOut(1000)
    		.next()
    		.fadeIn(1000)
    		.end()
    		.appendTo('.testimonials');
		},  15000);

	/* END TESTIMONIAL SLIDER */	

});