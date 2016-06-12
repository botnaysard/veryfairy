
<?php
mail('scotthayward@gmail.com','Test mail','The mail function is working!');
echo 'Mail sent!';
?>

<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$from = 'From: ContactVFD';
	$to = 'scotthayward@gmail.com';
	$subject = 'Contact form submission'
	$body = "From: $name\n E-mail: $email\n Message:\n $message";
?>

<?php
if ($_POST['submit'] && $human == '23') {
	if (mail ($to, $subject, $body, $from)) {
		echo '<p>Your message has been sent!</p>';
	} else {
		echo '<p>Oops!  Something went wrong, please try again.</p>';
	}
} else if ($_POST['submit'] && $human !='23') {
	echo '<p>Anti-span answer incorrect, please try again.</p>'	
}
?>