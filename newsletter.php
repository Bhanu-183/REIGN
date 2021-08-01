<?php
if (isset($_POST['submit'])) {
    $to = "bhanukrishnaprasad3333@gmail.com";
    $from = $_POST['email'];
    $subject = "Newsletter Subscription";
    $message = "\nQuery Topic : " . $subject;
    $headers = "From:" . $from;
    "From:" . $to;
    $mail_status =  mail($to, $subject, $message, $headers);
    if ($mail_status) {
?>
        <script>
            location.replace("./index.html");
        </script>
<?php }
}
