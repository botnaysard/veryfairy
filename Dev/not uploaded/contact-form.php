<?php
require 'phpmailer/PHPMailerAutoload.php';
if ($_POST) {
	$name    = $_POST['name'];
	$email   = $_POST['email'];
	$message = $_POST['message'];

	/* Start - GoDaddy Settings - DO NOT EDIT */
	
	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->Host        = "relay-hosting.secureserver.net";
	$mail->SMTPAuth    = false;
	$mail->setFrom($email, $name);
	
	/* End - GoDaddy Settings */

	/* Destination address for form content */
	
	$mail->addAddress('hifive@scotthayward.io');
	$mail->Subject = 'contact form submission - scotthayward.io';
	
	/* This is forwarded through a GoDaddy forwarding account */

	$mail->Body = $message;
	if (!$mail->send()) {
		echo "Mailer Error: " . $mail->ErrorInfo;
	} else {		
		header("http://www.averyfairydoor.com");
	}
}

?> 

