<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $name = $_POST['user_name'];
$phone = $_POST['Телефон'];
$name = $_POST['Имя'];

$mail->setFrom('adm@' . $_SERVER['HTTP_HOST'], 'Game Setup'); // от кого будет уходить письмо?
   // Кому будет уходить письмо
$mail->addAddress('s9729001@yandex.ru');     // Кому будет уходить письмо

$mail->isHTML(true);

$mail->Subject = 'Ожидание звонка';
$mail->Body    = ''  . '<br><p>Имя пользователя: <b>' . $name . '</b></p><br><p>Номер телефона пользователя: <b>' . $phone . '</b></p><br>';
$mail->AltBody = '';
// $mail->send();

if (!$mail->send()) {
    echo 'Error';
} 
