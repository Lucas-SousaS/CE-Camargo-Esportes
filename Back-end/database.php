<?php

$host = "localhost";
$db = "camargo_esportes";
$user = "root";
$password = "";

// Permite qualquer origem, pode substituir "*" por "http://localhost:3000" para permitir apenas o React local
header("Access-Control-Allow-Origin: *");
// Permite os métodos GET, POST, PUT, DELETE e OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Permite certos cabeçalhos como Content-Type e Authorization
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

try {
    $conn = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo 'Erro na conexão com o banco de dados: ' . $e->getMessage();
    exit;
}


?>