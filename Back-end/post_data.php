<?php
include('database.php');

$dados = json_decode(file_get_contents("php://input"), true);

if (empty($dados['nome']) || !is_string($dados['nome']) || strlen($dados['nome']) > 100) {
    $nome = null;
} else {
    $nome = htmlspecialchars(trim($dados['nome']));
}
$email = $dados['email'] ?? null;
$senha = $dados['senha'] ?? null;

$data_nascimento = $dados['data_nascimento'] ?? null;
$genero = $dados['genero'] ?? null;
$cidade = $dados['cidade'] ?? null;
$estado = $dados['estado'] ?? null;

$senha_criptografada = password_hash($senha, PASSWORD_DEFAULT);

try {
    $query = "INSERT INTO usuarios (nome, email, senha, data_nascimento, genero, cidade, estado)
              VALUES (:nome, :email, :senha, :data_nascimento, :genero, :cidade, :estado)";
    
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':senha', $senha_criptografada);
    $stmt->bindParam(':data_nascimento', $data_nascimento);
    $stmt->bindParam(':genero', $genero);
    $stmt->bindParam(':cidade', $cidade);
    $stmt->bindParam(':estado', $estado);

    if ($stmt->execute()) {
        header('Content-Type: application/json');
        echo json_encode(["status" => "success", "message" => "Usuário cadastrado com sucesso"]);
        echo $data_nascimento;
    } else {
        echo json_encode(["status" => "error", "message" => "Erro ao cadastrar usuário"]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}

?>
