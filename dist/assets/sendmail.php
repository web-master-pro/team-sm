<?php

    // НАСТРОЙКИ получателя/отправителя teamsm@bk.ru
    $to_email    = "teamsm@bk.ru";         // Email получателя отчетов, например: 'admin@mysite.ru'
    $to_name     = "Team Expert";          // Имя получателя отчетов, например: 'Иван Петров'
    $from_email  = "";                     // Email отправителя, например: 'noreply@mysite.ru'
    $from_name   = "";                     // Имя, от которого отправляются отчеты, например: 'Мой Сайт'
    $subject     = "[Team Expert SM]";     // Название сайта в квадратных скобках для подстановки в тему письма префиксом

    // НЕ ТРОГАЙТЕ КОД НИЖЕ ЭТОЙ СТРОКИ!!!

    $data["form"]       = strtolower(strip_tags($_REQUEST['form']));
    $data["name"]       = strip_tags($_REQUEST['name']);
    $data["email"]      = strip_tags($_REQUEST['email']);
    $data["phone"]      = strip_tags($_REQUEST['phone']);
    $serts              = $_POST['serts'];

    if (empty($data["form"])) exit;

    switch ($data["form"]) {
        case "form-order":
            $headline = "Заявка на расчет стоимости сертификации";
            break;
        case "form-calc":
            $headline = "Заявка на расчет стоимости сертификации";
            break;
        case "form-consult":
            $headline = "Заказ экспресс-консультации";
            break;
        case "form-offer":
            $headline = "Заявка по акции 2 сертификата за 1 аудит";
            break;
        case "form-docs":
            $headline = "Запрос списка необходимых документов";
            break;
        case "form-ask":
            $headline = "Вопрос специалисту";
            break;
        default:
            $headline = "Заявка...";
    };

    $comp_serts = "";
    if (!empty($serts)) {
        $count = count($serts);
        for($i=0; $i < $count; $i++) {
            $comp_serts = $comp_serts . $serts[$i];
            if ($i < $count - 1) {
                $comp_serts = $comp_serts . ", ";
            };
        };
    };

    $subject .= " " . $headline;

    $to_email       = strip_tags(trim($to_email));
    $from_email     = strip_tags(trim($from_email));

    if (empty($from_email)) {$from_email = $to_email;}

    $headers  = "From: $from_name <$from_email>\r\n";
    $headers .= "Reply-To: $from_name <$from_email>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";

    $message  = "<html><body style=\"font-family:Arial,sans-serif;\">\r\n";
    $message .= "<h2 style=\"border-bottom:1px solid #ccc;\">" . $headline. "</h2>\r\n";

    switch ($data["form"]) {
        case "form-order":
        case "form-calc":
            $message .= "<p><strong>Имя:</strong> " . $data["name"] . "</p>\r\n";
            $message .= "<p><strong>Телефон:</strong> " . $data["phone"] . "</p>\r\n";
            $message .= "<p><strong>Необходимые сертификаты:</strong> " . $comp_serts . "</p>\r\n";
            break;
        case "form-consult":
            $message .= "<p><strong>Телефон:</strong> " . $data["phone"] . "</p>\r\n";
            break;
        case "form-offer":
        case "form-ask":
            $message .= "<p><strong>Имя:</strong> " . $data["name"] . "</p>\r\n";
            $message .= "<p><strong>Телефон:</strong> " . $data["phone"] . "</p>\r\n";
            break;
        case "form-docs":
            $message .= "<p><strong>Email:</strong> " . $data["email"] . "</p>\r\n";
            $message .= "<p><strong>Телефон:</strong> " . $data["phone"] . "</p>\r\n";
            break;
    };

    $message .= "</body></html>";

    $result = @mail($to_email, $subject, $message, $headers);

    $headline = "Первичный список документов";

    if ($data["form"] == "form-docs") {
        $headers  = "From: $from_name <$from_email>\r\n";
        $headers .= "Reply-To: $from_name <$from_email>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
        $message  = "<html><body style=\"font-family:Arial,sans-serif;\">\r\n";
        $message .= "<h2 style=\"border-bottom:1px solid #ccc;\">" . $headline. "</h2>\r\n";
        $message .= "<p><strong>Уважаемые клиенты, подготовьте заранее следующий перечень документов:</strong> </p>\r\n";
        $message .= "<p>- Учредительные документы<br>\r\n";
        $message .= "<p>- Устав, свидетельство о государственной регистрации компании<br>\r\n";
        $message .= "<p>- Реквизиты, банковские реквизиты<br>\r\n";
        $message .= "<p>- Приказ на директора, штатное расписание<br>\r\n";
        $message .= "<p>- Разрешительные документы (лицензии, аттестаты и тд)</p>\r\n";
        $message .= "<p>&nbsp;</p>\r\n";
        $message .= "<p>С уважением,<br>\r\n";
        $message .= "Team Expert SM</p>\r\n";
    };

    @mail($data["email"], $headline, $message, $headers);

    if($result) {
        echo "true";
    } else {
        echo "false";
    }

?>
