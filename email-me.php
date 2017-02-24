<?php 

	require 'PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'dan@dangoslen.me';                 // SMTP username
	$mail->Password = 'bwF@m45ly14';                           // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;     

	$data = null;
	
	if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
		$headers .= 'From: <' & $_POST['email'] & '>';
		
		$success = mail('dan@dangoslen.me', 'Message Me from DanGoslen.me', $_POST['message'], $headers);
		
		$data = array('success' => $success);
	}
	else 
	{
		$data = array('success' => false, message => 'There were missing fields. Please fill them in and try again.');
	}
	
	echo json_encode($data);
?>
	
