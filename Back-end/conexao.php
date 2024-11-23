<?php
    $username = "root";
    $host  = "localhost";
    $password = "";
    $database = "camargo_esportes";

    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->error){
        echo "erro ao conectar banco de dados";
    }

?>