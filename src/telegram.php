<?php

/* https://api.telegram.org/bot1544394614:AAFsAdeR1qRLf1ohBrp1YKKVF2zz6k-cblw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$text = $_POST['user_text'];
$token = "1544394614:AAFsAdeR1qRLf1ohBrp1YKKVF2zz6k-cblw";
$chat_id = "-534383677";
$arr = array(
  'ПІБ: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Деталі замовлення: ' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>