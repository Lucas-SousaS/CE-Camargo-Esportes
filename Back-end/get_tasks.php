<?php
require('database.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
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