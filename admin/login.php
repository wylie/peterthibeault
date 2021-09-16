<?php

	function login() {	
		if(isset($_POST['submitted'])) {
			// START A SESSION
			
			$problem = FALSE;
		
			// check for a username
			if(empty($_POST['username'])) {
				print '<span class="red">Please enter your username.</span>';
				$problem = TRUE;
			}
			
			// check for a password
			if(empty($_POST['password'])) {
				print '<span class="red">Please enter your password.</span>';
				$problem = TRUE;
			}
				
			if($problem == FALSE) { // if there were no errors with the login form do this:
				// get contents of a file into a string
				$filename = "../../2010user/user.txt";
				$handle = fopen($filename, "r");
				$contents = fread($handle, filesize($filename));
				fclose($handle);
				
				// set username & password
				$username = $_POST['username'];
				$password = md5($_POST['password']);
				$login = $username . ':' . $password;
				
				// check entered info to stored info			
				if($contents != $login) {
					print '<span class="red">Your username and password do not match those on file.</span>';
				} else { // if the info matches
					// START A SESSION
					session_start();
					$_SESSION['username'] = $_POST['username'];
					header('Location:upload.php');
				}
			}
		} // end of the submitted function 
	}

?>