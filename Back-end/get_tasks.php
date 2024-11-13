<?php
require('database.php');

// Permite qualquer origem, pode substituir "*" por "http://localhost:3000" para permitir apenas o React local
header("Access-Control-Allow-Origin: *");
// Permite os métodos GET, POST, PUT, DELETE e OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Permite certos cabeçalhos como Content-Type e Authorization
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$query = "SELECT * FROM noticias";
try {
    $stmt = $conn->query($query);
    $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($tasks);
} catch(PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}

?>