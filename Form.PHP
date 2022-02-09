<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['usermessage'];
$subject = $_REQUEST['usersubject'];
$number = $_REQUEST['usernumber'];

if(empty($name) || empty($email) || empty($message) || empty($subject) || empty($number))
{
    echo "please fill all the fields";
}
else{
    mail("christopherarulraj4@gmail.com", "Webtech Message", $message, "From: $name <
    $email>");
    echo "<script type='text/javascript'> alert('your message sent successfully');
    window.history.log(-1);
    </script>";
}
?>































