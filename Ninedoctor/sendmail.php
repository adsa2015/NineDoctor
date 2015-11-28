<?php


	
	$fromEmail      =  strip_tags($_POST['email']);
    $fromName       =  strip_tags($_POST['name']);
	$phonenumber    =  strip_tags($_POST['phone']);
    $subject        =  strip_tags($_POST['subject']);
    $themessage     =  strip_tags($_POST['message']);
    $themessage     =  $themessage."the sender phone number is ".$phonenumber ; 



    $toEmail = 'eng.mahmoudbayomy@gmail.com';
    $toName = '7Host';

    // Mail::send('emails.contactus', $data , function($message) use ($toEmail, $toName, $fromEmail, $fromName, $subject)
    // {
    //     $message->to($toEmail, $toName);

    //     $message->from($fromEmail, $fromName);

    //     $message->subject($subject);
    // });

$headers = 'From:' .$fromName . "\r\n" .
    'Reply-To:' .$fromEmail. "\r\n" .
    'X-Mailer: PHP/' . phpversion();



if(mail($toEmail, $subject, $themessage, $headers))
{

      // Send 
echo "success";
       
}
else{ echo "An error has be occured"; }

?>