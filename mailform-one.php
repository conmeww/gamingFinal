<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $name = $_POST['user_name'];
$phone = $_POST['Телефон'];
$name = $_POST['Имя'];







//$mail->SMTPDebug = 3;                               // Enable verbose debug output

// $mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
// $mail->SMTPAuth = true;                               // Enable SMTP authentication
// $mail->Username = 'dzharuzov@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
// $mail->Password = '$dk820&123'; // Ваш пароль от почты с которой будут отправляться письма
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('adm@' . $_SERVER['HTTP_HOST'], 'Game Setup'); // от кого будет уходить письмо?
   // Кому будет уходить письмо
$mail->addAddress('antoninakot95@gmail.com');     // Кому будет уходить письмо
// //$mail->addAddress('ellen@example.com');               // Name is optional
// //$mail->addReplyTo('info@example.com', 'Information');
// //$mail->addCC('cc@example.com');
// //$mail->addBCC('bcc@example.com');
// //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);

$mail->Subject = 'Ожидание звонка';
$mail->Body    = ''  . '<br><p>Номер телефона пользователя: <b>' . $phone . '</b></p><br><p>Номер телефона пользователя: <b>' . $name . '</b></p><br>';
$mail->AltBody = '';
// $mail->send();

if (!$mail->send()) {
    echo 'Error';
} 
