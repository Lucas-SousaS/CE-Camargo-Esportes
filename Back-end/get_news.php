<?php
include("./database.php");

try {
    $pdo = new PDO('mysql:host=localhost;dbname=camargo_esportes', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("SELECT * FROM noticias WHERE id = :id");

    $id = $_GET["id"];

    $stmt->execute([':id' => $id]);

    $noticias = $stmt->fetch(PDO::FETCH_ASSOC); 

    if ($noticias) {
        echo json_encode($noticias);
    } else {
        echo json_encode(['error' => 'Notícia não encontrada']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro no banco de dados: ' . $e->getMessage()]);
}
?>
