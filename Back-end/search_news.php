<?php
include("database.php");
$params = json_decode(file_get_contents("php://input"), true);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$dados = isset($params["query"]) ? $params["query"] : null;

echo ($dados);

$stmt = $pdo->prepare("SELECT * FROM noticias WHERE titulo LIKE ? OR conteudo LIKE ?");
$stmt->execute(['%' . $dados . '%', '%' . $dados . '%']);
$resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($resultados) {
    echo json_encode($resultados);
} else {
    echo json_encode(['error' => 'Notícia não encontrada']);
}

?>