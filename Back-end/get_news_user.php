<?php
$dados = json_decode(file_get_contents("php://input"), true);

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

$id = (int) $dados["idUser"];

try {
    $pdo = new PDO('mysql:host=localhost;dbname=camargo_esportes', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("SELECT * FROM noticias WHERE autor_id = :id");
    $stmt->execute([':id' => $id]);

    $noticias = $stmt->fetchAll(PDO::FETCH_ASSOC); 

    if ($noticias) {
        echo json_encode($noticias);
    } else {
        echo json_encode(['error' => 'Notícias não encontradas']);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Erro ao processar a solicitação']);
}
?>
