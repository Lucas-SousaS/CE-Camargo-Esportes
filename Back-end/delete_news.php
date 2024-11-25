<?php
include('database.php');

$dados = json_decode(file_get_contents("php://input"), true);

$id = (int) $dados['idNews'];

try {


    $query = "DELETE FROM noticias WHERE id = :id;";
    echo "$id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':id', $id);   



    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Notícia deletada com sucesso"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erro ao deletar a notícia."]);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Erro ao processar a solicitação: ' . $e->getMessage()]);
}
?>
