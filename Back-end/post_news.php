<?php
include('database.php');

$dados = json_decode(file_get_contents("php://input"), true);

$data_publicacao = date('Y-m-d');

$titulo = isset($dados['titulo']) && is_string($dados['titulo']) && !empty($dados['titulo']) ? htmlspecialchars(trim($dados['titulo'])) : null;
$conteudo = isset($dados['conteudo']) && is_string($dados['conteudo']) ? htmlspecialchars(trim($dados['conteudo'])) : null;
$autor = isset($dados['autor']) && is_string($dados['autor']) ? htmlspecialchars(trim($dados['autor'])) : null;
$categoria = isset($dados['categoria']) && is_string($dados['categoria']) ? htmlspecialchars(trim($dados['categoria'])) : null;
$imagens = isset($dados['imagens']) && is_string($dados['imagens']) ? json_encode(json_decode($dados['imagens'], true)) : null;
$materiaCompleta = isset($dados['materiaCompleta']) && is_string($dados['materiaCompleta']) ? htmlspecialchars(trim($dados['materiaCompleta'])) : null;

try {

    if (!$titulo || !$conteudo || !$autor || !$categoria || !$materiaCompleta) {
        echo json_encode(["status" => "error", "message" => "Campos obrigatórios faltando."]);
        exit;
    }

    $query = "INSERT INTO noticias (titulo, conteudo, autor, categoria, imagens, materiaCompleta, data_publicacao)
              VALUES (:titulo, :conteudo, :autor, :categoria, :imagens, :materiaCompleta, :data_publicacao)";

    $stmt = $conn->prepare($query);

    // Mapear os valores para os parâmetros da query
    $stmt->bindParam(':titulo', $titulo);
    $stmt->bindParam(':conteudo', $conteudo);
    $stmt->bindParam(':autor', $autor);
    $stmt->bindParam(':categoria', $categoria);
    $stmt->bindParam(':imagens', $imagens);
    $stmt->bindParam(':materiaCompleta', $materiaCompleta);
    $stmt->bindParam(':data_publicacao', $data_publicacao);

    // Executar a query
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Notícia cadastrada com sucesso"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erro ao cadastrar a notícia."]);
    }
} catch (PDOException $e) {
    // Exibir erro de forma controlada
    echo json_encode(['status' => 'error', 'message' => 'Erro ao processar a solicitação: ' . $e->getMessage()]);
}
?>
