<?php
if (isset($_POST['submit'])) {
    $to = "bhanukrishnaprasad3333@gmail.com";
    $from = $_POST['email'];
    $subject = "Newsletter Subscription";
    $message = " Name: " . $name . "\nQuery Topic : " . $subject . " \nQuery:" . "\n";
    $headers = "From:" . $from;
    "From:" . $to;
    $mail_status =  mail($to, $subject, $message, $headers);
}
