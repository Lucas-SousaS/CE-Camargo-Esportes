<?php

if(!isset($_SESSION)){
    session_start();
}

$allowed_origins = [
    'http://localhost:3000', 
    'http://localhost:5173',
    'http://127.0.0.1:5500', 
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header('HTTP/1.1 403 Forbidden');
    echo json_encode(['success' => false, 'message' => 'Origem não permitida.']);
    exit();
}

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


if (isset($_SESSION['id'])) {
    echo json_encode(['loggedIn' => true, 'user' => ['id' => $_SESSION['id'], 'nome' => $_SESSION['nome']]]);
    return;
} else {
    echo json_encode(['loggedIn' => false]);
    return;
}
?>
