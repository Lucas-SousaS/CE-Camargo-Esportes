<?php 
    include('database.php');


    $query = "INSERT INTO usuario VALUES (null,'Samira', '2024-11-14', 'lucasss@gmail.com', '11221173391', '12345')";

    try {
        $stmt = $conn->query($query);
        $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
        header('Content-Type: application/json');
        echo json_encode($tasks);
    } catch(PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
?>