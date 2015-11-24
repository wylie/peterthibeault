<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	if(!$name) {
		echo '<div class="error msg">Please enter your name</div>';
		$problem = TRUE;
	}
	if(!$email) {
		echo '<div class="error msg">Please enter your email</div>';
		$problem = TRUE;
	}
	if(!$message) {
		echo '<div class="error msg">Please enter your message</div>';
		$problem = TRUE;
	}

	if(!$problem) {
    mail( "tbowdsign@verizon.net", "Website Contact Form", $message, "From: $email" );
		echo '<div class="success msg">Your message has been sent</div>';
	}

?>
